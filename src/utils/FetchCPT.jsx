import { useEffect } from "react"

const FetchCPT = ({ endpoint, setState }) => {

    const baseUrl = import.meta.env.VITE_API_URL;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${baseUrl}/${endpoint}?_embed`)
                if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`)
                const data = await res.json()
                setState(data);
            } catch (err) {
                console.error(`Error fetching ${endpoint}:`, err)
            }
        }

        fetchData()
    }, [endpoint, setState])

    return null
}

export default FetchCPT
