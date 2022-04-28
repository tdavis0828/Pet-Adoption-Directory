import React from 'react'
import { Link } from 'react-router-dom'

function CardPet(props) {
  return (
    <div>
        <li className='cards_pet'>
            <Link to={props.path} className='cards_pet_link'>
                <figure className='cards_pet_pic-wrap' data-category={props.label}>
                    <img src={props.src}></img> 
                </figure>
                <div className='pets_item_info'>
                  <h5 className='pets_item_text'>{props.texts}</h5>
                </div>
            </Link>
        </li>
    </div>
  )
}

export default CardPet