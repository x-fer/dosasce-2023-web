export const XFER_KONTESTIS_ORG_ID = '245568648297582592'

export const CONTEST_ID = '252933837913329664'
export const PROBLEMS_ID: Record<number, Record<number, string>> = {
  1: {
    //redni broj zadatka
    1: '252935072326356992', // srednja
    2: '252935072326356992', // preddiplom
    3: '252935072326356992', // diplom
  },
  2: {},
  3: {},
}

export const INVITE_CODE = 'b2f052d6be6cdeae'

export const uzrasti = [
  { id: 'ucenik', title: 'Učenik', number: 1 },
  { id: 'preddiplomski', title: 'Predddiplomski studij', number: 2 },
  { id: 'diplomski', title: 'Diplomski studij', number: 3 },
]

export const getProblemID = (category: string, redniBrojZadatka: number) => {
  const categoryNumber = uzrasti.find(uzrast => uzrast.title === category)!.number

  return PROBLEMS_ID[redniBrojZadatka][categoryNumber]
}
