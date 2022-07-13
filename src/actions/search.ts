import { SET_SEARCH_RESULT } from '../state/types'
import { AppDispatch } from '../state/store'
import { responseToSearch } from '../utils/googleSearch'

const googleURL = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_GOOGLE_CX}&q=`

export const requestsearch = (engine: string, searchText: string) => (dispatch: AppDispatch) => {
    fetch(`${googleURL}${searchText}`)
    .then(response => response.json())
    .then(json => dispatch({ type: SET_SEARCH_RESULT, payload: responseToSearch(json.items) }))
    .catch(error => console.log(error))
}
