import { SET_SEARCH_RESULT } from '../state/types'

const SEARCH = [{
    title: "Lorem ipsum dolor sit",
    url: "https://github.com",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat dolor culpa deleniti ratione magnam natus quo, explicabo doloremque impedit odio. Inventore ad magnam illum, delectus a repellat quidem quibusdam!"
},
{
    title: "Lorem ipsum dolor sit",
    url: "https://github.com",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat dolor culpa deleniti ratione magnam natus quo, explicabo doloremque impedit odio. Inventore ad magnam illum, delectus a repellat quidem quibusdam!"
},
{
    title: "Lorem ipsum dolor sit",
    url: "https://github.com",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat dolor culpa deleniti ratione magnam natus quo, explicabo doloremque impedit odio. Inventore ad magnam illum, delectus a repellat quidem quibusdam!"
}]

const initialState = {
  searchResult: SEARCH
}

const searchReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SEARCH_RESULT: {
      return {
        ...state,
        searchResult: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default searchReducers
