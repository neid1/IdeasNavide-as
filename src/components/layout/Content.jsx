import React from 'react'
import logo from "../img/cena-de-navidad.jpg"


export const Content = () => {
  return (
    <div className='content1'id='inicio'>
      <div>
        <img src={logo} alt="" />
        <p>Esta es una celebración en honor a la noche 
          en la que Jesús nació en Belén. Esta costumbre suele
           ser diferente en cada país. Tiene origen en Europa y
            su principal objetivo es simbolizar la abundancia que 
            trae Jesús con su llegada, además de unir a las familias 
            en esta noche tan especial.</p>
      </div>
    </div>
  )
}
