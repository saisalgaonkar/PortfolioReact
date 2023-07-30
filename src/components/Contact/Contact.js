// stylesheet
import './Contact.scss'
// react functions
import React, { useState, useEffect } from 'react'
// site loading animation
import Loader from 'react-loaders'
// animated letters lib
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
// email sender
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
// Map imports
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Contact() {
  const redirectGmail ="https://mail.google.com/mail/u/0/?to=saisalgaonkar37@gmail.com&su=&body=&fs=1&tf=cm"
  // use usestate for animation
  const [letterClass, setLetterClass] = useState('text-animate')

  // use ref function
  const refForm = useRef()

  // use effect function
  useEffect(() => {
    // dont use return here
    // this 6000 is wait time for first bounceIn animation
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])


  // use for sending email has to have only public key sna start with serviceID
  const sendEmail = (e) => {
    e.preventDefault()
    // console.log(refForm.current)
    emailjs
      .sendForm(
        'service_7po0lcm',
        'template_g4e1oru',
        refForm.current,
        'Jh-soJD5g-mLXlNU7'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          // console.log(error)
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
        </div>
        <p>
          I am open to freelance work, particularly for projects that are
          challenging or extensive in scope. If you have any other inquiries or
          requests, please feel free to reach out to me using the form below.
        </p>

        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" value="SEND" className="flat-button" />
              </li>
            </ul>
          </form>
        </div>
        <div className='info-map'>
        <span className='myname'>Saiprasad H. Salgaonkar</span>
        <br />       
        India,
        <br />
        Bicholim Goa - 403504 <br />
        <span><a href={redirectGmail}>saisalgaonkar37@gmail.com</a>
        </span>
        </div>
        <div className='map-wrap'>
        <MapContainer center={[15.60, 73.95]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[15.60, 73.95]}>
              <Popup>Sai's place</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
