import Button from './Components/Button/index'

export default function Evento(){
    function meuEvento() {
        window.alert(`Evento ativado!`)
    }
    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
        </div>
    )
}