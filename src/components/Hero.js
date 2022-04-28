import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Hero.css'

function Hero() {
  return (
    <div className='hero-container'>
        <video src={`${process.env.PUBLIC_URL}/Pound.mp4`}></video>
        <h1>Your Little Misfit Awaits</h1>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Adoption Awaits</Button>
        </div>
    </div>
  )
}

export default Hero