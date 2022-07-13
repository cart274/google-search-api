import { createStore, combineReducers, applyMiddleware } from 'redux'
import searchReducers from '../reducers/search'
import thunk from 'redux-thunk'

export const combinedReducers = combineReducers({
    searchReducers
})

export const store = createStore(combinedReducers, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
