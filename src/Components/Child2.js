import Child3 from "./Child3";

//læg mærke til at der ikke er et spor af data, som ikke bliver brugt
export default function Child2() {
    return (
        <div>
            <h3>Child 2</h3>
            <Child3 />
        </div>
    )
}