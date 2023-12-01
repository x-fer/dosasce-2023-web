export const XFER_KONTESTIS_ORG_ID = '245568648297582592'

export const PROBLEMS_ID: Record<number, Record<number | string, string>> = {
  1: {
    id: '252956103850070016', //contest id
    1: '252956375737438208', // srednja
    2: '252956838595661824', // preddiplom
    3: '252957225096581120', // diplom
  },
  2: {},
  3: {},
}

export const INVITE_CODE = '01b0bd17df48c577'

export const uzrasti = [
  { id: 'ucenik', title: 'Učenik', number: 1 },
  { id: 'preddiplomski', title: 'Preddiplomski studij', number: 2 },
  { id: 'diplomski', title: 'Diplomski studij', number: 3 },
]

export const getProblemID = (category: string, redniBrojZadatka: number) => {
  const categoryNumber = uzrasti.find(uzrast => uzrast.title === category)!.number

  return PROBLEMS_ID[redniBrojZadatka][categoryNumber]
}

export const getContestID = (brojZadatka: number) => {
  return PROBLEMS_ID[brojZadatka].id
}
