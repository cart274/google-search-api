import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchResults from './SearchResults'

const middlewares = [thunk] 
const mockStore = configureStore(middlewares)

const RESULTS = [
    {    id: 1,
        title: "Test",
        url: "http://www.fake-test.com",
        resume: "fake"
    }
]

it('Test input and button', async () => {
    const store = mockStore({
        searchReducers: { 
            loading: false,
            searchResult: RESULTS
        }
    })

    render(<SearchResults store={store} />)

    const title = screen.getByText(RESULTS[0].title)
    expect(title).toBeVisible()

})
