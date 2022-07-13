import React, {useState} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { requestsearch } from '../actions/search'
import { Engines } from '../constants/engines'

interface SearchProps {
    requestsearch: any
    loading: boolean
}

const Search = ({requestsearch, loading}: SearchProps) => {
    const [searchText, setSearchText] = useState('')
    const [engine, setEngine] = useState<Engines>(Engines.Google)

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setSearchText(event.target.value)
    }

    const handleEngineChange = (event: React.ChangeEvent<HTMLSelectElement> ) => {
        setEngine(event.target.value as Engines)
    }

    const handleSearch = () => {
        requestsearch(engine, searchText)
    }

    return <Container>
        <Input type='text' placeholder='Write your search' value={searchText} onChange={handleTextChange} />
        <Select onChange={handleEngineChange} value={engine || Engines.Google}>
            {
                Object.entries(Engines).map( ([key, value])=> {
                    return <option key={key} value={value}>{key}</option>
                })
            }
        </Select>
        {loading? <Loading>...loading</Loading> : <Button onClick={handleSearch} disabled={!searchText.length}>Search</Button>}
    </Container>
}

const mapStateToProps = (state: any) => {
    return ({
    loading: state.searchReducers.loading,
})}

const mapDispatchToProps = {
    requestsearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

const Container = styled.div`
    display: flex;
`

const Input = styled.input`
    border: 1px solid darkblue;
    border-right: 0;
    padding: 4px 12px;
`

const Select = styled.select`
    padding: 4px 12px;
    font-weight: 500;
`

const Button = styled.button`
    margin-left: 20px;
    background-color: darkblue;
    border: 0;
    border-radius: 8px;
    padding: 4px 12px;
    color: #FCFCFC;
    cursor: pointer;
    &:disabled {
        background-color: gray;
    }
`

const Loading = styled.span`
    margin-left: 20px;
`