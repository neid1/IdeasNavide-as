import React from 'react'
import postre1 from "../img/cop.png"
import ensaladaTri from "../img/ensalada-tri.jpg"
import ensaladaTro from "../img/ensalada-tropical.jpg"
import ensaladaRusa from "../img/ensalada-rusa.jpg"

export const Ensaladas = () => {
  return (
    <div className='platos'id='ensalada'>
        <h2 >Ensaladas</h2>
        <div className='platos-content'>
            <h3>Ensalada Tricolor</h3>
            <div className='platos-div'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus officiis perferendis facere fuga, perspiciatis magni cumque illum, voluptas reprehenderit vitae blanditiis velit. Corporis doloremque labore, nostrum optio soluta quae?</p>
              <img src={ensaladaTri} alt="" />
            </div>
        </div>
        <div className='platos-content'>
            <h3>Ensalada Tropical</h3>
            <div className='platos-div'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus officiis perferendis facere fuga, perspiciatis magni cumque illum, voluptas reprehenderit vitae blanditiis velit. Corporis doloremque labore, nostrum optio soluta quae?</p>
              <img src={ensaladaTro} alt="" />
            </div>
        </div>
        <div className='platos-content'>
            <h3>Ensalada Rusa</h3>
            <div className='platos-div'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus officiis perferendis facere fuga, perspiciatis magni cumque illum, voluptas reprehenderit vitae blanditiis velit. Corporis doloremque labore, nostrum optio soluta quae?</p>
              <img src={ensaladaRusa} alt="" />
            </div>
        </div>
    </div>
  )
}