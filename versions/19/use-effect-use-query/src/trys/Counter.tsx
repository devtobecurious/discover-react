import { useEffect, useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)

    console.info('counter')

    // useEffect(() => {
    //     console.info('useEffect')
    //     const intervalId = setInterval(() => {
    //         setCount(count + 1)
    //     }, 1000);

    //     return () => clearInterval(intervalId)
    // }, [count])

    useEffect(() => {
        console.info('useEffect')
        const intervalId = setInterval(() => {
            setCount(c => c + 1)
        }, 1000);

        return () => clearInterval(intervalId)
    }, [])

    return <h1>{count}</h1>
}