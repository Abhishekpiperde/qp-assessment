import { Request, Response } from 'express'

export function errorHandler(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response
) {
  const status = err.status || 500
  const message = err.message || 'Internal Server Error'
  res.status(status).json({ message })
}
