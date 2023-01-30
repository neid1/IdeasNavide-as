import React from 'react'
import arbol from "../img/arbolChoco.jpg"
import brow from "../img/brow.jpg"
import corona from "../img/coronaHojaldre.jpg"

export const Postres = () => {
  return (
    <div className='platos'id='postres'>
        <h2 >Postres</h2>
        <div className='platos-content'>
            <h3>Arbol de Chocolate</h3>
            <div className='platos-div'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus officiis perferendis facere fuga, perspiciatis magni cumque illum, voluptas reprehenderit vitae blanditiis velit. Corporis doloremque labore, nostrum optio soluta quae?</p>
              <img src={arbol} alt="" />
            </div>
        </div>
        <div className='platos-content'>
            <h3>Corona de Hojaldre</h3>
            <div className='platos-div'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus officiis perferendis facere fuga, perspiciatis magni cumque illum, voluptas reprehenderit vitae blanditiis velit. Corporis doloremque labore, nostrum optio soluta quae?</p>
              <img src={corona} alt="" />
            </div>
        </div>
        <div className='platos-content'>
            <h3>Brownie Navideño</h3>
            <div className='platos-div'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus officiis perferendis facere fuga, perspiciatis magni cumque illum, voluptas reprehenderit vitae blanditiis velit. Corporis doloremque labore, nostrum optio soluta quae?</p>
              <img src={brow} alt="" />
            </div>
        </div>
    </div>
  )
}
