import { useState } from "react";

export default function Condional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
        window.alert('Testando!');
    }

    function limparEmail(e) {
        e.preventDefault();
        setUserEmail('');
        window.alert('Email limpo');
    }

    return (
        <div>
            <h2>Renderização Condicional</h2>
            <p>Cadastre o seu e-mail:</p>
            <form>
                <input type="email" placeholder="Digite um email" onChange={(e) => setEmail(e.target.value)} />
            </form>
            <button onClick={enviarEmail}>Enviar-email</button>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
    )


}