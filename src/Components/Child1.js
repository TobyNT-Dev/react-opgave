import Child2 from "./Child2";
import { useContext } from "react";
import { DataContext } from "./Parent";

export default function Child1() {
    //henter vores data context med useContext, og sætter den til 'data' variablen
    const data = useContext(DataContext)
    return (
        <div>
            <h2>Child 1 - Data: {data}</h2>
            <Child2 />
        </div>
    )
}