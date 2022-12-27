import { Item } from "./Item"

export function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Fiat"/>
            </ul>
        </>
    )
}