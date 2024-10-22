export interface problemDate {
  startDate: Date
  endDate?: Date
}

export const zad1: problemDate = {
  startDate: new Date('2023-11-29T23:00:00Z'),
  endDate: new Date('2023-12-20T23:00:00Z'),
}

export const zad2: problemDate = {
  startDate: new Date('2023-12-06T23:00:00Z'),
  endDate: new Date('2023-12-20T23:00:00Z'),
}

export const zad3: problemDate = {
  startDate: new Date('2023-12-13T23:00:00Z'),
  endDate: new Date('2023-12-20T23:00:00Z'),
}

export const dodjela: problemDate = {
  startDate: new Date('2023-12-20T23:00:00Z'),
}

export const getZad = (number: number): problemDate => {
  switch (number) {
    case 1:
      return zad1
    case 2:
      return zad2
    case 3:
      return zad3
    default:
      return dodjela
  }
}

export const useZadActive = (number: number): boolean => {
  const now = new Date()
  const zad = getZad(number)

  return now.getTime() >= zad.startDate.getTime()
}

export const useZadFinished = () => {
  const now = new Date()

  return now.getTime() >= dodjela.startDate.getTime()
}

export const getZadatakDescription = (number: number): string => {
  switch (number) {
    case 1:
      return 'Zadatak 1'
    case 2:
      return 'Zadatak 2'
    case 3:
      return 'Zadatak 3'
    default:
      return 'Dodjela'
  }
}
