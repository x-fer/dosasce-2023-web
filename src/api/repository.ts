import * as R from './routes'
import { JSON_HEADER } from './api'
import { CONTEST_ID, INVITE_CODE } from '@/utils/kontestis'

export const addToContest = () => {
  return fetch(R.joinContest(), {
    method: 'POST',
    headers: JSON_HEADER,
    body: JSON.stringify({
      join_code: INVITE_CODE,
    }),
  })
}

export const checkUserCategory = (email: string) => {
  return fetch(R.userCategoryEmail(email), {
    method: 'GET',
  })
}

export const checkUserCategories = (emails: string[]) => {
  return fetch(R.userCategories(emails), {
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
  return fetch(R.submissionOfSolution(problemId), {
    method: 'POST',
    headers: JSON_HEADER,
    body: JSON.stringify({
      language: 'python',
      code: code,
    }),
  })
}

export const getLeaderboard = () => {
  return fetch(R.leaderboard(CONTEST_ID), {
    method: 'GET',
    headers: JSON_HEADER,
  })
}
