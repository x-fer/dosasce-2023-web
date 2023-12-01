import * as R from './routes'
import { JSON_HEADER } from './api'
import { INVITE_CODE, getContestID } from '@/utils/kontestis'

export const addToContest = () => {
  return fetch(R.joinContest(), {
    method: 'POST',
    headers: JSON_HEADER,
    body: JSON.stringify({
      join_code: INVITE_CODE,
    }),
  })
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
  console.log('submitSolution', problemId, code.substring(0, 100))
  return fetch(R.submissionOfSolution(problemId), {
    method: 'POST',
    headers: JSON_HEADER,
    body: JSON.stringify({
      language: 'output-only',
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
