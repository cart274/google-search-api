import { SET_SEARCH_RESULT } from '../state/types'
import { AppDispatch } from '../state/store'
import { getSearchFromGoogle } from '../utils/googleSearch'
import { Engines } from '../constants/engines'

interface Item{
    url: string; 
    resume: string; 
    title: string;
}

export const requestsearch = (engine: string, searchText: string) => async (dispatch: AppDispatch) => {
    let response:Item[] = []
    switch(engine) {
        case Engines.Google:
            response = await getSearchFromGoogle(searchText)
            break
        case Engines.Bing:
            response = await getSearchFromGoogle(searchText)
            break
        case Engines.All:
            response = await getSearchFromGoogle(searchText)
            break
        default:
    }

    dispatch({ type: SET_SEARCH_RESULT, payload: response })
}
