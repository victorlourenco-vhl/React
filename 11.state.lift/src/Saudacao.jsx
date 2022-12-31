import Nome from "./Nome";

export default function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem ?`
    }

    return (
        <>
            {nome == undefined ?
                (<p>Saudações!</p>)
                :
                (<p>{gerarSaudacao(nome)}</p>)
            }

        </>
    )
}