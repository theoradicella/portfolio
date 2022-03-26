import { React } from 'react';
import './Icons.css'

// ICONS
import github from '../../svgs/github.svg'
import email from '../../svgs/email.svg'
import whatsapp from '../../svgs/whatsapp.svg'
import linkedin from '../../svgs/linkedin.svg'

const Icons = () => {
// DO SOMETHING WHEN HOVERING
  return (
      <div className="container">
          <a className="iconLink" href="https://mail.google.com/mail/u/0/?fs=1&to=theoradicella@gmail.com&tf=cm"><img alt='email' className="icon" src={email}/></a>
          <a className="iconLink" href="https://wa.me/+542944386283"><img alt='whatsapp' className="icon" src={whatsapp}/></a>
          <a className="iconLink" href="https://www.linkedin.com/in/theoradicella/"><img alt='linkedin' className="icon" src={linkedin}/></a>
          <a className="iconLink" href="https://github.com/theoradicella"><img alt='github' className="icon" src={github}/></a>
      </div>
  )
}


export default Icons