import React, { useState } from 'react'
import logoPavo from "../img/logoPavo.png"
import {Link, link} from "react-scroll"
import barra from "../img/barra.png"

export const Nav = () => {

  const [show,SetShow]=useState(false)

  const mostrar=()=>{
    SetShow(!show);
  }



  return (
    
    <div>
      <ul className='nav'>
    <li>
      <Link to="plato" spy={true} smooth={true} offset={-70} duration={900}>Platos</Link>
    </li>
    <li>
      <Link to="ensalada" spy={true} smooth={true} offset={-70} duration={900}>Ensaladas</Link>
    </li>
    <Link to="inicio" spy={true} smooth={true} offset={140} duration={900}><img className='logoPavo' src={logoPavo} alt="" /></Link>
    <li>
      <Link to="postres" spy={true} smooth={true} offset={-70} duration={900}>Postres</Link>
    </li>
    <li>
      <Link to="bebida" spy={true} smooth={true} offset={-70} duration={800}>Bebidas</Link>
    </li>
    <img className='barra' onClick={mostrar} src={barra} alt="" />
</ul>
<div className='navvR'>
    <Link to="inicio" spy={true} smooth={true} offset={140} duration={900}><img className='logoPavo' src={logoPavo} alt="" /></Link>
      {show ?(<ul className='navResponsive'>
    <li>
    <img className='barra' onClick={mostrar} src={barra} alt="" />
      </li>    
    <li className='linklink'>
      <Link to="plato" onClick={mostrar} spy={true} smooth={true} offset={-70} duration={900}>Platos</Link>
    </li>
    <li className='linklink'>
      <Link to="ensalada" onClick={mostrar} spy={true} smooth={true} offset={-70} duration={900}>Ensaladas</Link>
    </li>
    <li className='linklink'>
      <Link to="postres" onClick={mostrar} spy={true} smooth={true} offset={-70} duration={900}>Postres</Link>
    </li>
    <li className='linklink'>
      <Link to="bebida" onClick={mostrar} spy={true} smooth={true} offset={-70} duration={800}>Bebidas</Link>
    </li>
    
</ul>):(
  <div onClick={mostrar}>
    <img className='barra' src={barra} alt="" />
  </div>
 
  )}
    </div>    
        
    </div>
  )
}
