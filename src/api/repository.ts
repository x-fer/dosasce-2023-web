import * as R from './routes'
import { JSON_HEADER } from './api'
import { INVITE_CODE } from '@/utils/kontestis'

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

export const submitUserCategory = (email: string, category: string) => {
  return fetch(R.userCategory(), {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      category: category,
    }),
  })
}

// export const submitSolution = () = {
//   return fetch(R.submitSolution(), {
//     method: 'POST',
//     headers: JSON_HEADER,
//     body: JSON.stringify({
//       problem_id: '252873735726436352',
//       language: 'python3',
//       source: 'print("Hello World")',
//     }),
//   })
// }
