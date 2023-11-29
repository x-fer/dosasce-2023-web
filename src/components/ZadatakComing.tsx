import { getZad } from '@/utils/dates'

const ZadatakComing = ({ number }: { number: number }) => {
  const zad = getZad(number)

  return (
    <div className="flex h-full w-full items-center justify-center text-center text-2xl md:text-4xl">
      Ovaj zadatak će biti dostupan
      <br />
      od {zad.startDate.toLocaleDateString('hr', { day: 'numeric', month: 'numeric' })} do{' '}
      {zad.endDate!.toLocaleDateString('hr', { day: 'numeric', month: 'numeric' })}
    </div>
  )
}

export default ZadatakComing
