type TimelineMobileCardProps = {
  name: string
  startDate: string
  endDate: string
}

const TimelineMobileCard = (props: TimelineMobileCardProps) => {
  return (
    <div className="flex flex-row items-center justify-start ">
      <div className="relative h-64 w-8 shrink-0">
        <div className="absolute left-1/2 -ml-1 h-full w-2 bg-red" />

        <div className="absolute left-1/2 top-1/2 -ml-1 -mt-1 h-2 w-12 bg-red" />

        <div className="absolute left-1/2 top-1/2 -ml-4 -mt-4 h-8 w-8 rounded-full bg-red shadow-xl">
          <div className="rouded-full absolute left-1/2 top-1/2 -ml-2 -mt-2 h-4 w-4 rounded-full bg-white" />
        </div>
      </div>

      <div className="h-2 w-12 bg-red" />

      <div className="flex h-48 w-full flex-col items-center justify-center rounded-3xl border-8 border-red bg-white p-4">
        <h1 className="mb-2 text-5xl">{props.name}</h1>
        <p className="text-3xl">Od {props.startDate}</p>
        <p className="text-3xl">Do {props.endDate}</p>
      </div>
    </div>
  )
}
const TimelineMobile = () => {
  return (
    <div className="flex w-full flex-col px-7 sm:hidden">
      <TimelineMobileCard name="Zadatak 1" startDate="7.12." endDate="7.12." />
      <TimelineMobileCard name="Zadatak 2" startDate="7.12." endDate="7.12." />
      <TimelineMobileCard name="Zadatak 3" startDate="7.12." endDate="7.12." />
    </div>
  )
}

const TimelineLaptopCard = () => {
  return <div></div>
}

export const TimelineLaptop = () => {
  return <div>Timeline</div>
}

const Timeline = () => {
  return (
    <>
      <TimelineMobile />

      <TimelineLaptop />
    </>
  )
}

export default Timeline
