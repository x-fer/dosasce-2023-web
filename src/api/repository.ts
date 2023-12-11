import * as R from './routes'
import { JSON_HEADER } from './api'
import { INVITE_CODE, getContestID, getInviteCode } from '@/utils/kontestis'

export const addToContest = () => {
  return fetch(R.joinContest(), {
    method: 'POST',
    headers: JSON_HEADER,
    body: JSON.stringify({
      join_code: INVITE_CODE,
    }),
  })
}

export const addToContestSpecific = (number: number) => {
  const inv_code = getInviteCode(number)

  return fetch(R.joinContest(), {
    method: 'POST',
    headers: JSON_HEADER,
    body: JSON.stringify({
      join_code: inv_code,
    }),
  })
}

export const addToAllContests = () => {
  try {
    addToContestSpecific(1)
  } catch (e) {
    console.log('Fail add to contest 1')
  }

  try {
    addToContestSpecific(2)
  } catch (e) {
    console.log('Fail add to contest 2')
  }

  try {
    addToContestSpecific(3)
  } catch (e) {
    console.log('Fail add to contest 2')
  }
}

export const checkUserCategories = (emails?: string[]) => {
  return fetch(R.userCategories(emails ?? ['none']), {
    method: 'GET',
  })
}

export const submitUserCategory = (email: string, category: string) => {
  return fetch(R.userCategory(), {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      category: category,
    }),
  })
}

export const submitSolution = (problemId: string, code: string) => {
  // console.log('submitSolution', problemId, code.substring(0, 100))
  return fetch(R.submissionOfSolution(problemId), {
    method: 'POST',
    headers: JSON_HEADER,
    body: JSON.stringify({
      language: 'output-only',
      code: code,
    }),
  })
}

export type possibleProgrammingLanguages = 'python' | 'c' | 'cpp' | 'go' | 'rust' | 'java' | 'esl'

export const submitSolution2 = (problemId: string, code: string, language: string) => {
  return fetch(R.submissionOfSolution(problemId), {
    method: 'POST',
    headers: JSON_HEADER,
    body: JSON.stringify({
      language: language,
      code: code,
    }),
  })
}

export const getLeaderboard = (problemNumber: number) => {
  return fetch(R.leaderboard(getContestID(problemNumber)), {
    method: 'GET',
    headers: JSON_HEADER,
  })
}
