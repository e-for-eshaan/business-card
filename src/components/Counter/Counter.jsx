import { useEffect, useState } from "react"

export const Counter = ({ number, step = 1 }) => {
    const [count, setcount] = useState(0)

    useEffect(() => {
        if (count <= number) {
            setTimeout(() => setcount(prev => prev + step), 80)
        }
        else {
            setcount(number)
        }
    }, [count, number, step])

    return count

}