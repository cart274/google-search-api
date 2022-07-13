import { SET_SEARCH_RESULT, SET_LOADING_RESULT } from '../state/types'
import { AppDispatch } from '../state/store'
import { getSearchFromGoogle } from '../utils/googleSearch'
import { getSearchFromBing } from '../utils/bingSearch'
import { Engines } from '../constants/engines'

interface Item {
    url: string
    resume: string
    title: string
    id: string
}

export const requestsearch = (engine: string, searchText: string) => async (dispatch: AppDispatch) => {
    let search:Promise<Item[]>[] = []
    dispatch({ type: SET_LOADING_RESULT, payload: true })

    switch(engine) {
        case Engines.Google:
            search.push(getSearchFromGoogle(searchText))
            break
        case Engines.Bing:
            search.push(getSearchFromBing(searchText))
            break
        case Engines.All:
            search.push(getSearchFromGoogle(searchText))
            search.push(getSearchFromBing(searchText))
            break
        default:
    }
    Promise.all(search).then(values => {
        dispatch({ type: SET_SEARCH_RESULT, payload: values.flat() })
    });
}
