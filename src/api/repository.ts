import * as R from './routes'
import { JSON_HEADER } from './api'
import { INVITE_CODE } from '@/utils/kontestis'

export const addToContest = () => {
  return fetch(R.addToContest(), {
    method: 'POST',
    headers: JSON_HEADER,
    body: JSON.stringify({
      join_code: INVITE_CODE,
    }),
  })
}
