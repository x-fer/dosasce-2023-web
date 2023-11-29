import { XFER_KONTESTIS_ORG_ID } from '@/utils/kontestis'

export const JSON_HEADER = {
  // fali authorization header
  Authorization: `${localStorage.getItem('SavedLoginToken')}`,
  'X-Kontestis-Org-Id': XFER_KONTESTIS_ORG_ID,
  'Content-Type': 'application/json',
}
