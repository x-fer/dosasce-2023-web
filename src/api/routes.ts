const kontestisURL = import.meta.env.VITE_API_ENDPOINT

export const joinContest = () => `${kontestisURL}/api/contest/join`

export const userCategoryEmail = (email: string) => `/user-category?email=${email}`

export const userCategory = () => `/user-category`
