import { useEffect } from "react"

const FetchCPT = ({ endpoint, setState }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://homegrass-backend.local/wp-json/wp/v2/${endpoint}?_embed`)
                if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`)
                const data = await res.json()
                setState(data);
                console.log(data);
            } catch (err) {
                console.error(`Error fetching ${endpoint}:`, err)
            }
        }

        fetchData()
    }, [endpoint, setState])

    return null
}

export default FetchCPT
