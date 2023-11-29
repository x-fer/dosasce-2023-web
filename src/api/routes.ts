const kontestisURL = import.meta.env.VITE_API_ENDPOINT

export const joinContest = () => `${kontestisURL}/api/contest/join`

export const userCategoryEmail = (email: string) => `/userCategory?email=${email}`

export const userCategory = () => `/userCategory`
