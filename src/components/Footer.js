import React from 'react'
import {FaInstagram,FaFacebookF} from 'react-icons/fa'
import {BsPhone,} from 'react-icons/bs'
import '../css/style.css'
const Footer = () => {
  return (
    <div className='Footer'>
            <h3>Contact Me</h3>
    <div className='FooterInfo'>
        <div className='contact' >
            <p><BsPhone/>: +48 576 123 040</p>
            <p ><FaInstagram/> : <a href='https://www.instagram.com/shahmali.7/'> Shahmali.7 </a></p>
            <p><FaFacebookF/> :<a href='https://www.facebook.com/sahmali.mustafayev.1'> Shahmali Mustafayev </a></p>
        </div>
        <div className='contactInfo'>This site was created for portfolio<br/>Best Regards : Shahmali Mustafayev</div>
    </div>
    </div>
  )
}

export default Footer