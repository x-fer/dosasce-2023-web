import { Mistletoe, Snowman, Trees } from '.'

type TimelineCardProps = {
  name: string
  startDate: string
  endDate: string
  left?: true | false
  image?: string
}

const TimelineCard = (props: TimelineCardProps) => {
  return (
    <div className={`flex w-full items-center sm:w-[768px] sm:justify-end ${props.left ? 'sm:flex-row-reverse' : ''} `}>
      {props.image ? <img src={props.image} className="mx-14 hidden w-64 sm:block" /> : <></>}

      <div className="relative h-64 w-8 shrink-0">
        <div className={`absolute ${props.left ? 'left-2 sm:left-0' : 'left-2'} top-1/2 -ml-1 -mt-1 h-2 w-8 bg-red`} />

        <div className="absolute left-1/2 -ml-1 h-full w-2 bg-red" />

        <div className="absolute left-1/2 top-1/2 -ml-4 -mt-4 h-8 w-8 rounded-full bg-red shadow-xl">
          <div className="rouded-full absolute left-1/2 top-1/2 -ml-2 -mt-2 h-4 w-4 rounded-full bg-white" />
        </div>
      </div>

      <div className="h-2 w-12 bg-red" />

      <div className="flex h-48 w-80 flex-col items-center justify-center rounded-3xl border-8 border-red bg-white p-4">
        <h1 className="mb-2 text-5xl">{props.name}</h1>
        <p className="text-3xl">Od {props.startDate}</p>
        <p className="text-3xl">Do {props.endDate}</p>
      </div>
    </div>
  )
}

const Timeline = () => {
  return (
    <>
      <div className="bg-snow-pattern w-full">
        <div className="relative flex flex-col items-center px-4">
          <TimelineCard name="Zadatak 1" startDate="7.12." endDate="7.12." image={Trees} left />
          <TimelineCard name="Zadatak 2" startDate="7.12." endDate="7.12." image={Mistletoe} />
          <TimelineCard name="Zadatak 3" startDate="7.12." endDate="7.12." image={Snowman} left />
        </div>
      </div>
    </>
  )
}

export default Timeline
