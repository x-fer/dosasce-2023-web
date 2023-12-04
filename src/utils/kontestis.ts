export const XFER_KONTESTIS_ORG_ID = '245568648297582592'

export const PROBLEMS_ID: Record<number, Record<number | string, string>> = {
  1: {
    id: '252956103850070016', //contest id
    1: '252956375737438208', // srednja
    2: '252956838595661824', // preddiplom
    3: '252957225096581120', // diplom
  },
  2: {
    id: '254301326991691776', //contest id za zad 2 -testing
    1: '254571878574723072', //srednja
    2: '254301769113276416', //preddiplom
    3: '254571747733409792', //diplom
  },
  3: {},
}

export const INVITE_CODE = '01b0bd17df48c577'
export const INVITE_CODE_2 = 'a83b3d4ee960be9e'
export const INVITE_CODE_3 = 'Nes u buducnosti'

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

export const getInviteCode = (brojZadatka: number) => {
  if (brojZadatka === 1) return INVITE_CODE
  else if (brojZadatka === 2) return INVITE_CODE_2
  else return INVITE_CODE_3
}
