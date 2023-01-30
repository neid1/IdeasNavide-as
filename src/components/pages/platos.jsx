import React from 'react'
import postre1 from "../img/cop.png"
import pavo from "../img/pavoN.jpg"
import chancho from "../img/chanchoN.jpg"
import pollo from "../img/polloN.jpg"

export const Platos = () => {
  return (
    <div className='platos'id='plato'>
        <h2 >Platos</h2>
        <div className='platos-content'>
            <h3>Pavo</h3>
            <div className='platos-div'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus officiis perferendis facere fuga, perspiciatis magni cumque illum, voluptas reprehenderit vitae blanditiis velit. Corporis doloremque labore, nostrum optio soluta quae?</p>
              <img src={pavo} alt="" />
            </div>
        </div>
        <div className='platos-content'>
            <h3>Chanco Navideño</h3>
            <div className='platos-div'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus officiis perferendis facere fuga, perspiciatis magni cumque illum, voluptas reprehenderit vitae blanditiis velit. Corporis doloremque labore, nostrum optio soluta quae?</p>
              <img src={chancho} alt="" />
            </div>
        </div>
        <div className='platos-content'>
            <h3>el Plato 1</h3>
            <div className='platos-div'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus officiis perferendis facere fuga, perspiciatis magni cumque illum, voluptas reprehenderit vitae blanditiis velit. Corporis doloremque labore, nostrum optio soluta quae?</p>
              <img src={pollo} alt="" />
            </div>
        </div>
    </div>
  )
}