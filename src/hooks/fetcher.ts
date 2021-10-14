
//@ts-ignore
export const fetcher = (...args) => fetch(...args).then(res => {
    if(!res.ok) {
        throw res.json();
    }
    return res.json()
})