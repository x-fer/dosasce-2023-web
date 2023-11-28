import { getZad, getZadatakDescription } from '@/utils/dates'

const LeaderBoardComing = ({ number }: { number: number }) => {
  const zad = getZad(number)

  return (
    <div className="flex h-full w-full items-center justify-center text-center text-4xl">
      Ljestvica za {getZadatakDescription(number)}
      <br />
      biti će dostupna od {zad.startDate.toLocaleDateString('hr', { day: 'numeric', month: 'numeric' })}
    </div>
  )
}

export default LeaderBoardComing
