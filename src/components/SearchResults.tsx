import React from 'react'
import styled from 'styled-components'

interface SearchList {
    title: string,
    url: string,
    resume: string
}

const SEARCH = [{
    title: "Lorem ipsum dolor sit",
    url: "https://github.com",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat dolor culpa deleniti ratione magnam natus quo, explicabo doloremque impedit odio. Inventore ad magnam illum, delectus a repellat quidem quibusdam!"
},
{
    title: "Lorem ipsum dolor sit",
    url: "https://github.com",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat dolor culpa deleniti ratione magnam natus quo, explicabo doloremque impedit odio. Inventore ad magnam illum, delectus a repellat quidem quibusdam!"
},
{
    title: "Lorem ipsum dolor sit",
    url: "https://github.com",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat dolor culpa deleniti ratione magnam natus quo, explicabo doloremque impedit odio. Inventore ad magnam illum, delectus a repellat quidem quibusdam!"
}]

export const SearchResult = () => {

    return <Container>
        {
            SEARCH.map( ({title, url, resume}: SearchList) => <>
                <Cite> {title} </Cite>
                <Link href={url}> {url} </Link>
                <p> {resume} </p>
                </>
            )
        }
    </Container>
}

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