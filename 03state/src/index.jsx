import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

class Componente extends React.Component{
    constructor(props){
        super(props);
        this.state = {nome:'Victor'};
    }

    render(){
        return <h1>{this.state.nome}</h1>;
    }
}

ReactDOM.render(<Componente/>, document.getElementById('root'));