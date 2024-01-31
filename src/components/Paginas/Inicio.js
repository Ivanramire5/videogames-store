import React from 'react'
import InicioImg from "../InicioImg/InicioImg";
import "../../style/inicio.css"
import Alert from '../Alert/Alert'
const Inicio = () => {
  return (
    <div className='divInicioUno'>
      <Alert />
      <h1 className='inicioH1'>Welcome to my APP</h1>
      <h2 className='inicioH2'>In this app you can find some games like</h2>
      <h3 className='inicioH3'>You can buy this games in the diferent pages on this app</h3>
      <InicioImg />
      <footer className='footerInicio'>
        <h4 className='h4Footer'>App builded in React</h4>
        <p className='pFooter'>GamingWiki©</p>
      </footer>
    </div>
  )
}

export default Inicio
