import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchForm from './SearchForm'

const middlewares = [thunk] 
const mockStore = configureStore(middlewares)

it('Test input and button', async () => {
    const store = mockStore({
        searchReducers: { 
            loading: false,
        }
    })

    render(<SearchForm store={store} />)

    const searchButton = screen.getByRole('button', {
        name: /Search/i
    })
    expect(searchButton).toBeDisabled()

    const inputSearch = screen.getByPlaceholderText('Write your search')
    expect(inputSearch).toBeVisible()

    fireEvent.change(inputSearch, {target: {value: 'photos'}})
    expect(searchButton).not.toBeDisabled()

})

it('Test loading', async () => {
    const store = mockStore({
        searchReducers: { 
            loading: true,
        }
    })

    render(<SearchForm store={store} />)

    const loading = screen.getByText(/loading/i)
    expect(loading).toBeVisible()

})
