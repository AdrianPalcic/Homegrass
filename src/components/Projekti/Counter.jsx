import React, { useEffect, useState } from 'react'

const Counter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const end = parseInt(target)
        if (isNaN(end)) return

        const incrementTime = Math.floor(duration / end)

        const timer = setInterval(() => {
            start += 1
            setCount(start)
            if (start === end) clearInterval(timer)
        }, incrementTime)

        return () => clearInterval(timer)
    }, [target, duration])

    return <span>{count}{/\D/.test(target) ? target.replace(/\d+/g, '') : ''}</span>
}

export default Counter
