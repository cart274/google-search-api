import React from 'react'
import styled from 'styled-components'
import Search from '../components/Search'
import SearchResult from '../components/SearchResults'

export const SynackSearch = () => <Container>
    <h1>Synack search</h1>
    <Search />
    <SearchResult />
</Container>

const Container = styled.div`
    margin: 40px 0 0 80px;
`
