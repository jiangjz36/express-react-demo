const CHANGE_INFO_LIST = 'HOME/CHANGE_INFO_LIST'
const defaultState = {
  infoList: ['1']
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INFO_LIST:
      return {
        ...state,
        infoList: action.value
      }
    default:
      return state
  }
}