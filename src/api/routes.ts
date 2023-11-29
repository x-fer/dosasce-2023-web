const kontestisURL = import.meta.env.VITE_API_ENDPOINT

export const joinContest = () => `${kontestisURL}/api/contest/join`

export const userCategoryEmail = (email: string) => `/userCategory?email=${email}`

export const userCategory = () => `/userCategory`

export const submissionOfSolution = (submissionId: string) => `${kontestisURL}/api/submission/${submissionId}`

export const leaderboard = (contestId: string) => `${kontestisURL}/api/contest/${contestId}/leaderboard`
