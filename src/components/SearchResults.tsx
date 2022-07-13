import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

interface SearchList {
    title: string,
    url: string,
    resume: string
}

interface SearchResultProps {
    results: SearchList[]
}

const SearchResult = ({results}: SearchResultProps) => {
    
    return <Container>
        {
            results.map( ({title, url, resume}: SearchList) => <>
                <Cite> {title} </Cite>
                <Link href={url}> {url} </Link>
                <p> {resume} </p>
                </>
            )
        }
    </Container>
}

const mapStateToProps = (state: any) => {
    return ({
    results: state.searchReducers.searchResult,
})}
    
export default connect(mapStateToProps)(SearchResult)

const Container = styled.div`
    margin: 40px 0 0 0px;
    width: 50%;
`
const Cite = styled.cite`
    font-size: 12px;
`

const Link = styled.a`
    display: block;
    font-size: 20px;
`