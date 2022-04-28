import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-adoption'>
            <p className='footer-adoption-heading'>
                Come on by and grab your Misfit.
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input' ></input>
                    <Button buttonStyle='btn--outline'>Adopt!</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Abouts us</h2>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Tyler</Link>
                    <Link to='/'>Richard</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'><i className="fa-brands fa-facebook"></i></Link>
                    <Link to='/'><i className="fa-brands fa-twitter-square"></i></Link>
                    <Link to='/'><i className="fa-brands fa-google"></i></Link>
                    <Link to='/'><i className="fa-brands fa-instagram"></i></Link>
                    <Link to='/'><i className="fa-brands fa-linkedin-in"></i></Link>
                    <Link to='/'><i className="fa-brands fa-github"></i></Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                         <i className='fa-solid fa-copyright'>Tyler and Richard</i> Little Misfits <i className='fa-solid fa-otter'></i> 
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}


export default Footer