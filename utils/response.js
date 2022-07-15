import { StatusCode } from './enum'

const createRes = (params) => {
  const status = params.statusCode || StatusCode.OK
  const body = {
    code: params.code || 0,
    data: params.data || null,
    msg: params.msg || ''
  }
  params.res.status(status).json(body)
}

export default createRes