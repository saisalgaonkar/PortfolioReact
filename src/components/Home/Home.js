import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'

// all styles are here
// https://animate.style/

import { Link } from 'react-router-dom'
import './Home.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'

export default function Home() {
  // constants used to animated letters
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['S', 'a', 'i', 'p', 'r', 'a', 's', 'a', 'd']
  const jobArray = [
    'A',
    'u',
    't',
    'o',
    'm',
    'a',
    't',
    'i',
    'o',
    'n',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    // dont use return here
    // this 6000 is wait time for first bounceIn animation
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000) 
  }, [])

  return (
    <>
    <div className="home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>&nbsp;
          {/* user name */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          {/* profession */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>

        <h2> RPA Developer / Python Programmer / Entrepreneur</h2>

        <Link to="/contact" className="flat-botton">
          &nbsp;CONTACT ME &nbsp;
        </Link>
      </div>
      <Logo/>
    </div>
    <Loader type='pacman'/>
    </>
  )
}
