import typeMap from '../type'

export const getHomeInfoList = (list) => ({
  type: typeMap.CHANGE_INFO_LIST,
  value: list
})