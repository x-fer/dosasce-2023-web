export type OsobaItem = {
  nickname: string
  points: number
}

const skolarci: OsobaItem[] = [
  {
    nickname: 'majamilas',
    points: 2,
  },
  {
    nickname: 'ivanvlahov',
    points: 10,
  },
]

const preddiplomski: OsobaItem[] = [
  {
    nickname: 'zvoneh',
    points: 2000,
  },
  {
    nickname: 'milanvrankic',
    points: -2,
  },
]

const diplomski: OsobaItem[] = [
  {
    nickname: 'laragrrr',
    points: 5000,
  },
  {
    nickname: 'milinovic',
    points: 10,
  },
  {
    nickname: 'krunoslav',
    points: 313,
  },
]

const SVI = [...skolarci, ...preddiplomski, ...diplomski]

export const leaderboardData = [SVI, skolarci, preddiplomski, diplomski]
