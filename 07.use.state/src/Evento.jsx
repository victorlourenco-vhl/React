function meuEvento(){
    window.alert("Botão ativado");
}

export default function Evento(){
    return(
        <>
            <p>Click para disparar um evento</p>
            <button onClick={meuEvento}>CLICK</button>
        </>
    )
}