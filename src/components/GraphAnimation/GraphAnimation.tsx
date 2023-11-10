import React, { useEffect, useState } from "react";
import "./graphAnimation.scss";

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

const GraphAnimation = () => {
  const [particles, setParticles] = useState<Particle[]>(
    Array(400)
      .fill(null)
      .map(
        () =>
          new Particle(
            Math.random() * 200,
            Math.random() * 200,
            Math.random() * 2 * Math.PI,
            Math.random() * 100 + 60,
            Math.random() * 1 + 2,
            Math.random() < 0.25,
            Math.random() * 360
          )
      )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const particlesCopy = particles.map((p) => p.copy());
      particlesCopy.forEach((p) => p.update());
      setParticles(particlesCopy);
    }, 1000 / Particle.FRAMES_PER_SECOND);

    return () => clearInterval(interval);
  });

  return (
    <div className="at-graph-animation">
      {particles.map((particle, idx) => (
        <div
          className="at-particle"
          key={`particle-${idx}`}
          style={{
            top: `${particle.yPos - 50}%`,
            left: `${particle.xPos - 50}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: particle.isSquare ? "0px" : `${particle.size / 2}px`,
            transform: particle.isSquare
              ? `rotate(${particle.rotation}deg)`
              : "",
          }}
        ></div>
      ))}
    </div>
  );
};

export default GraphAnimation;
