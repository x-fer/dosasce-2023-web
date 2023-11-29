import { useState } from 'react'
import ProblemPage from '@/components/ProblemPage'

import { leaderboardData } from './leaderboard_data'
import RadioButton from '@/components/RadioButton'

const LeaderBoardComponent = () => {
  const [activeLeaderboard, setactiveLeaderboard] = useState<number>(0)

  const radioButtonData = [
    {
      id: 0,
      title: 'UKUPNO',
    },
    {
      id: 1,
      title: 'Školarci',
    },
    {
      id: 2,
      title: 'Preddiplomski',
    },
    {
      id: 3,
      title: 'Diplomski',
    },
  ]
  return (
    <ProblemPage>
      <div className="p-5">
        <RadioButton data={radioButtonData} activeElement={activeLeaderboard} onChange={setactiveLeaderboard} />

        <div className="bg-slate-200 p-5">
          {leaderboardData[activeLeaderboard]
            .sort((a, b) => b.points - a.points)
            .map((event, idx) => (
              <div className="border-2 border-slate-300 bg-white p-5" key={event.nickname + '-' + idx}>
                <div className="mr-3 inline">{idx + 1}</div>
                <div className="inline">{event.nickname}</div>
                <div className="float-right inline ">{event.points} </div>
              </div>
            ))}
        </div>
      </div>
    </ProblemPage>
  )
}

export default LeaderBoardComponent
