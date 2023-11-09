import React from 'react'
import './icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Icons() {
  return (
    <div className='icons'>
      <FontAwesomeIcon icon={faLinkedin} className='linkedin' />
      <FontAwesomeIcon icon={faTwitter} className='twitter' />
      <FontAwesomeIcon icon={faWhatsapp} className='whatsapp' />
      <FontAwesomeIcon icon={faInstagram} className='insta' />
    </div>
  )
}
