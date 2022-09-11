import { DataContext } from "./Parent"
import { useContext } from 'react'

export default function Child3() {
    const data = useContext(DataContext)
    return (
        <div>
            <h4>Child 3 - Data: {data}</h4>
        </div>
    )
}