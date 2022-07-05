import typeMap from '../type'

const defaultState = {
  infoList: ['1']
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case typeMap.CHANGE_INFO_LIST:
      return {
        ...state,
        infoList: action.value
      }
    default:
      return state
  }
}