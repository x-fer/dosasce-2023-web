/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import ProblemPage from '@/components/ProblemPage'

import RadioButton from '@/components/RadioButton'
import { checkUserCategories, getLeaderboard } from '@/api/repository'
import { getProblemID } from '@/utils/kontestis'

const LeaderBoardComponent = ({ problemNumber }: { problemNumber: number }) => {
  const [activeLeaderboard, setactiveLeaderboard] = useState<number>(0)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [leaderboardData, setLeaderboardData] = useState<any>()
  const [userCategoryData, setUserCategoryData] = useState<any>()

  const [leaderboardWithCategories, setLeaderboardWithCategories] = useState<any>()

  const radioButtonData = [
    {
      id: 0,
      title: 'UKUPNO',
      key: 'all',
    },
    {
      id: 1,
      title: 'Školarci',
      key: 'Učenik',
    },
    {
      id: 2,
      title: 'Preddiplomski',
      key: 'Preddiplomski studij',
    },
    {
      id: 3,
      title: 'Diplomski',
      key: 'Diplomski studij',
    },
  ]

  useEffect(() => {
    async function fetchData() {
      const leaderboardResponse = await getLeaderboard(problemNumber)
      const leaderboardJson = await leaderboardResponse.json()
      const leaderboardData = JSON.parse(leaderboardJson?.data).json

      setLeaderboardData(
        leaderboardData
          .filter((el: any) => {
            return Object.keys(el.score ?? {}).length > 0
          })
          .map((el: any) => {
            return {
              nickname: el.full_name,
              email: el.email,
              points: {
                ...el.score,
                total: Object.entries(el.score).reduce((acc, [, value]) => {
                  return acc + (value as number)
                }, 0),
              },
            }
          })
      )

      const userCategoriesResponse = await checkUserCategories(leaderboardData.map((el: any) => el.email))

      const userCategoriesJson = await userCategoriesResponse.json()

      const newUserCategoryData: any = {}
      userCategoriesJson.forEach((el: any) => {
        newUserCategoryData[el.email] = el.category
      })

      setUserCategoryData(newUserCategoryData)
      setIsLoading(false)
    }

    if (!leaderboardData || !userCategoryData) fetchData()
  }, [leaderboardData, userCategoryData])

  useEffect(() => {
    if (!leaderboardWithCategories && userCategoryData && leaderboardData) {
      const newLeaderboardWithCategories = radioButtonData.map(radioButton => {
        let problemId = 'total'
        if (radioButton.key !== 'all') problemId = getProblemID(radioButton.key, problemNumber)

        return leaderboardData
          .filter((leaderboardRow: any) => {
            if (radioButton.key === 'all') return true
            else return userCategoryData[leaderboardRow.email] === radioButton.key
          })
          .map((el: any) => ({
            ...el,
            points: el.points[problemId],
          }))
      })

      setLeaderboardWithCategories(newLeaderboardWithCategories)
    }
  }, [userCategoryData, leaderboardData])

  return (
    <ProblemPage>
      <div className="p-5">
        <RadioButton data={radioButtonData} activeElement={activeLeaderboard} onChange={setactiveLeaderboard} />

        <div className="bg-slate-200 p-5">
          {isLoading ? (
            <div className="text-left">Učitavam rang listu...</div>
          ) : (
            (leaderboardWithCategories?.length &&
              leaderboardWithCategories[activeLeaderboard]?.length &&
              leaderboardWithCategories[activeLeaderboard]
                .sort((a: any, b: any) => b.points - a.points)
                .map((event: any, idx: any) => (
                  <div className="border-2 border-slate-300 bg-white p-5" key={event.nickname + '-' + idx}>
                    <div className="mr-3 inline">{idx + 1}</div>
                    <div className="inline">{event.nickname}</div>
                    <div className="float-right inline ">{event.points} </div>
                  </div>
                ))) || <div className="text-left">Nema podataka</div>
          )}
        </div>
      </div>
    </ProblemPage>
  )
}

export default LeaderBoardComponent
