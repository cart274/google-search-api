interface Item{
    body: string
    id: string
    title: string
}

const bingURL = `https://jsonplaceholder.typicode.com/`

export const getSearchFromBing = async (searchText: string) => {
    const items = await fetch(`${bingURL}${searchText}`)
    .then(response => response.json())
    .then(json => responseToSearch(json))
    .catch(error => console.log(error))
    return items || []
}

export const responseToSearch = (response: Item[]) => {
    return response.map((item, key) => ({
        url: `http://${item.title.replaceAll(' ','-')}.com`,
        resume: item.body,
        title: item.title,
        id: item.id
    }))
}
