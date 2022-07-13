interface Item{
    link: string
    snippet: string
    title: string
}

export const responseToSearch = (response: Item[]) => {
    return response.map((item) => ({
        url: item.link,
        resume: item.snippet,
        title: item.title
    }))
}