import { cn } from '@/utils/utils'
import { Mistletoe, Presents, Snowman, Trees } from '.'
import { useNavigate } from 'react-router-dom'
import { zad1, zad2, zad3, dodjela, useZadActive, useZadFinished } from '@/utils/dates'

type TimelineCardProps = {
  name: string
  startDate: Date
  endDate?: Date
  left?: true | false
  image?: string
  number?: number
}

const TimelineCard = (props: TimelineCardProps) => {
  // const isLive = props.startDate && props.endDate && new Date() >= props.startDate && new Date() <= props.endDate
  const isLive = useZadActive(props.number ?? 0)
  const isFinished = useZadFinished()
  const navigate = useNavigate()

  return (
    <div
      className={`flex w-full items-center justify-center md:w-[768px] md:justify-end ${
        props.left ? 'md:flex-row-reverse' : ''
      } `}
    >
      {props.image ? <img src={props.image} className="mx-14 hidden w-64 md:block" /> : <></>}

      <div className="relative h-64 w-8 shrink-0">
        <div className={`absolute ${props.left ? 'left-2 md:left-0' : 'left-2'} top-1/2 -ml-1 -mt-1 h-2 w-8 bg-red`} />

        <div className="absolute left-1/2 -ml-1 h-full w-2 bg-red" />

        <div className="absolute left-1/2 top-1/2 -ml-4 -mt-4 h-8 w-8 rounded-full bg-red shadow-xl">
          <div className="absolute left-1/2 top-1/2 -ml-2 -mt-2 h-4 w-4 rounded-full bg-white" />
        </div>
      </div>

      <div className="h-2 w-12 bg-red" />

      <div
        className={cn(
          'flex h-48 w-80 flex-col items-center justify-center rounded-3xl border-8 border-red bg-white p-4',
          isLive && 'cursor-pointer'
        )}
        onClick={isLive ? () => navigate(`/problem/${props.number}`) : undefined}
      >
        <h1 className="mb-2 text-5xl">{props.name}</h1>

        {isLive ? (
          isFinished ? (
            props.startDate && !props.endDate ? (
              <p className="paragraph flex items-center justify-center text-center text-2xl text-black">
                FER, Unska ul. 3, dvorana A202, 19:15h
              </p>
            ) : (
              <p className="paragraph flex items-center text-2xl text-red underline">Pregledaj zadatak</p>
            )
          ) : (
            <p className="paragraph flex items-center text-2xl text-red underline">
              Otvoren do {props.endDate?.toLocaleDateString('hr', { day: 'numeric', month: 'long' })}!
            </p>
          )
        ) : (
          <>
            <p className="paragraph text-2xl">
              {props.endDate ? 'od ' : ''}
              {props.startDate.toLocaleDateString('hr', { day: 'numeric', month: 'numeric' })}
            </p>

            <p className="paragraph text-2xl">
              {props.endDate ? 'do ' : ''}
              {props.endDate?.toLocaleDateString('hr', { day: 'numeric', month: 'numeric' })} 19h, A202
            </p>
          </>
        )}
      </div>
    </div>
  )
}

const Timeline = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="w-full bg-snow-pattern">
          <div className="relative flex flex-col items-center justify-center px-4">
            <TimelineCard
              name="Zadatak 1"
              number={1}
              startDate={zad1.startDate}
              endDate={zad1.endDate}
              image={Trees}
              left
            />
            <TimelineCard
              name="Zadatak 2"
              number={2}
              startDate={zad2.startDate}
              endDate={zad2.endDate}
              image={Mistletoe}
            />
            <TimelineCard
              name="Zadatak 3"
              number={3}
              startDate={zad3.startDate}
              endDate={zad3.endDate}
              image={Snowman}
              left
            />
            <TimelineCard name="Dodjela" startDate={dodjela.startDate} image={Presents} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline
