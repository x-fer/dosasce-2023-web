import React from "react";
import './snow.scss'

class Particle {
    static PARTICLE_SPEED: number = 2;
    static FRAMES_PER_SECOND: number = 30;

    xPos: number;

    yPos: number;

    direction: number;

    size: number;

    speed: number;

    isSquare: boolean;

    rotation: number;

    constructor(
        xPos: number,
        yPos: number,
        direction: number,
        size: number,
        speed: number,
        isSquare: boolean,
        rotation: number
    ) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.direction = direction;
        this.size = size;
        this.speed = speed;
        this.isSquare = isSquare;
        this.rotation = rotation;
    }

    update() {
        this.xPos +=
            (this.speed * Math.cos(this.direction)) / Particle.FRAMES_PER_SECOND;
        this.yPos +=
            (this.speed * Math.sin(this.direction)) / Particle.FRAMES_PER_SECOND;

        this.xPos = (this.xPos + 200) % 200;
        this.yPos = (this.yPos + 200) % 200;
    }

    copy() {
        return new Particle(
            this.xPos,
            this.yPos,
            this.direction,
            this.size,
            this.speed,
            this.isSquare,
            this.rotation
        );
    }
}

interface SnowProps {
    width: number;
    height: number;
    particleCount: number;
    particleSize: number;
    particleSpeed: number;
    particleRotation: number;
    particleColor: string;
    backgroundColor: string;
    isSquare: boolean;
}

interface SnowState {
    particles: Particle[];
}

class Snow extends React.Component<SnowProps, SnowState> {
    canvasRef: React.RefObject<HTMLCanvasElement>;

    constructor(props: SnowProps) {
        super(props);

        this.canvasRef = React.createRef();

        this.state = {
            particles: [],
        };
    }

    componentDidMount() {
        this.initParticles();
        this.draw();
    }

    initParticles() {
        const particles: Particle[] = [];

        for (let i = 0; i < this.props.particleCount; i++) {
            particles.push(
                new Particle(
                    Math.random() * 200,
                    Math.random() * 200,
                    Math.random() * 2 * Math.PI,
                    this.props.particleSize,
                    this.props.particleSpeed,
                    this.props.isSquare,
                    Math.random() * 2 * Math.PI
                )
            );
        }

        this.setState({ particles });
    }

    draw() {
        const canvas = this.canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (!ctx) return;

        ctx.fillStyle = this.props.backgroundColor;
        ctx.fillRect(0, 0, this.props.width, this.props.height);

        ctx.fillStyle = this.props.particleColor;
        ctx.strokeStyle = this.props.particleColor;

        this.state.particles.forEach((particle) => {
            ctx.save();
            ctx.translate(particle.xPos, particle.yPos);
            ctx.rotate(particle.rotation);

            if (particle.isSquare) {
                ctx.fillRect(
                    -particle.size / 2,
                    -particle.size / 2,
                    particle.size,
                    particle.size
                );
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, particle.size / 2, 0, 2 * Math.PI);
                ctx.fill();
            }

            ctx.restore();
        });

        this.updateParticles();

        requestAnimationFrame(this.draw.bind(this));
    }

    updateParticles() {
        const particles = this.state.particles.map((particle) => {
            const newParticle = particle.copy();
            newParticle.update();
            return newParticle;
        });

        this.setState({ particles });
    }

    render() {
        return (
            <canvas
                ref={this.canvasRef}
                width={this.props.width}
                height={this.props.height}
            />
        );
    }
}

export default Snow;