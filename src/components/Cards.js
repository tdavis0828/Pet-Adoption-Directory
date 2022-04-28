import React from 'react'
import CardPet from './CardPet'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Checkout our Little Misfits!</h1>
        <div className='container'>
            <div className='cards_wrapper'>
                <ul className='cards_pet'>
                    <CardPet  src={`${process.env.PUBLIC_URL}/pet1.jpg`} text='Sample Text' label='Adopt' path='/adoption'/>
                    <CardPet  src={`${process.env.PUBLIC_URL}/pet2.jpg`} text='Sample Text' label='Adopt' path='/adoption'/>
                </ul>
                <ul className='cards_pet'>
                    <CardPet  src={`${process.env.PUBLIC_URL}/pet3.jpg`} text='Sample Text' label='Adopt' path='/adoption'/>
                    <CardPet  src={`${process.env.PUBLIC_URL}/pet4.jpg`} text='Sample Text' label='Adopt' path='/adoption'/>
                </ul>
                <ul className='cards_pet'>
                    <CardPet  src={`${process.env.PUBLIC_URL}/pet5.jpg`} text='Sample Text' label='Adopt' path='/adoption'/>
                    <CardPet  src={`${process.env.PUBLIC_URL}/pet6.jpg`} text='Sample Text' label='Adopt' path='/adoption'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards