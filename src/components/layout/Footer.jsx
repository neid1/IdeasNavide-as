import React from 'react'
import logoF from "../img/facebook.png"
import logoInstagram from "../img/instagram.png"
import logoTwiter from "../img/twiter.png"

export const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <h3>Siguenos para mas recetas</h3>
        <img className='fb' src={logoF} alt="" />
        <img className='intagram' src={logoInstagram} alt="" />
        <img className='twiter' src={logoTwiter} alt="" />
    </div>
  )
}
