import { SET_SEARCH_RESULT, SET_LOADING_RESULT  } from '../state/types'

const initialState = {
  loading: false,
  searchResult: [],
}

const searchReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SEARCH_RESULT: {
      return {
        ...state,
        searchResult: action.payload,
        loading: false
      }
    }
    case SET_LOADING_RESULT: {
      return {
        ...state,
        loading: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default searchReducers
