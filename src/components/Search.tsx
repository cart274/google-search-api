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
        <Input type='text' value={text} onChange={handleTextChange} />
        <Select onChange={handleEngineChange} value={engine}>
            {
                Object.entries(Engines).map( ([key, value])=> {
                    return <option key={key} value={value} selected={engine === value}>{key}</option>
                })
            }
        </Select>
        <Button onClick={handleSearch}>Search</Button>
    </Container>
}

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
`
