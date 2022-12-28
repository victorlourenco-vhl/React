import Item from "./Item"

export function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <Item marca="Ferrari" ano={1985}/>
            <Item marca="Fiat" ano={1964}/>
            <Item  ano={1985}/>
        </>
    )
}