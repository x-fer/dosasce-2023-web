/* eslint-disable @typescript-eslint/no-explicit-any */
export const logger = (message: any, ...other: any[]) => {
  if (import.meta.env.VITE_NODE_ENV === 'development') {
    console.log(message, ...other)
  }
}
