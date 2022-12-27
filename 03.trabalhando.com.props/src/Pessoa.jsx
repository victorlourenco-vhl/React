export function Pessoa({nome, idade, profissao, url}){
    return(
        <div>
            <img src={url} alt="" />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}