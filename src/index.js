
import ReactDOM from 'react-dom'; //Esto se cambia
import './index.css';

import React from 'react';
// import App from './App/App';

function App(props) {
  return (
    <h1>Hey, {props.saludo} {props.tardes}, {props.nombre} </h1>
  )
}

function withSaludo(saludo) 
{
  return function WrappedComponentWithSaludo(WrappedComponent)
  {
    return function otherFunc(tardes) 
    {
      return function (props) 
      {
        return (
          <React.Fragment>
            <WrappedComponent {...props} saludo={saludo} tardes={tardes}/>
            <p>Estamos acompañando al WrappedComponent</p>
          </React.Fragment>
        )
      }
    }
  }
}

const AppwithSaludo = withSaludo('buenas')(App)('tardes');


ReactDOM.render( //esto tambien se cambia
    // <App saludo="Hola" nombre="smart"/>,
    <AppwithSaludo nombre="Mariana"/>,

  document.getElementById('root')
);



