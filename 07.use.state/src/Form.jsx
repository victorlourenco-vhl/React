import { useState } from "react";



export default function Form() {

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    function cadastrarUsuario(e) {
        e.preventDefault()
        window.alert(`Usuário ${name} com a senha ${password} cadastrado com sucesso!`);
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}