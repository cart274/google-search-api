interface Item{
    link: string
    snippet: string
    title: string
}

const googleURL = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_GOOGLE_CX}&q=`

export const getSearchFromGoogle = async (searchText: string) => {
    const items = await fetch(`${googleURL}${searchText}`)
    .then(response => response.json())
    .then(json => responseToSearch(json.items))
    .catch(error => console.log(error))
    return items || []
}

export const responseToSearch = (response: Item[]) => {
    return response.map((item, key) => ({
        url: item.link,
        resume: item.snippet,
        title: item.title,
        id: `${item.link}${key}`
    }))
}