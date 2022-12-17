// Importar módulos
import React from 'react';
import  ReactDOM from 'react-dom';
import Componente01 from './Componente01';
import Componente02 from './Componente02';

// Componente do arquivo index.jsx
class Principal extends React.Component{
    render(){
        return (
            <div>
                <p>Olá, {this.props.json.nome}</p>
                <p>Você tem: {this.props.json.idade} anos</p>
            </div>
        );
    }
}

// JSON
var dados = {nome: "Victor Lourenço", idade:18};

ReactDOM.render(<Principal json={dados}/>, document.getElementById('root'))