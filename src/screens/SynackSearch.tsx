import React from 'react'
import styled from 'styled-components'
import { Search } from '../components/Search'

export const SynackSearch = () => <Container>
    <h1>Synac search</h1>
    <Search />
</Container>

const Container = styled.div`
    margin: 50px 0 0 100px;
`