import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Olá, Mundo</h1>
const element2 = React.createElement('h1', {}, 'Sem JSX')

ReactDOM.render(element, document.getElementById('root'));

