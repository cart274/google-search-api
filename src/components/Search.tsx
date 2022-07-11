import React, {useState} from 'react'
import styled from 'styled-components'

enum Engines {
    Google = 'google',
    Bing = 'bing',
    All = 'all' 
}

export const Search = () => {
    const [text, setText] = useState('')
    const [engine, setEngine] = useState<Engines>(Engines.Google)

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setText(event.target.value)
    }

    const handleEngineChange = (event: React.ChangeEvent<HTMLSelectElement> ) => {
        setEngine(event.target.value as Engines)
    }

    const handleSearch = () => {
        console.log('Searching...')
    }

    return <Container>
        <input type='text' value={text} onChange={handleTextChange} />
        <select onChange={handleEngineChange} value={engine}>
            {
                Object.entries(Engines).map( ([key, value])=> {
                    return <option key={key} value={value} selected={engine === value}>{key}</option>
                })
            }
        </select>
        <button onClick={handleSearch}>Search</button>
    </Container>
}

const Container = styled.div`
    display: flex;
`