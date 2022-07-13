import React from 'react'
import styled from 'styled-components'
import SearchForm from '../components/SearchForm'
import SearchResult from '../components/SearchResults'

export const SynackSearch = () => <Container>
    <h1>Synack search</h1>
    <SearchForm />
    <SearchResult />
</Container>

const Container = styled.div`
    margin: 40px 0 0 80px;
`
