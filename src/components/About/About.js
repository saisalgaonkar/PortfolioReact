import './About.scss'
import React,{useState,useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3, faGitAlt, faHtml5, faNodeJs, faPython, faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    // dont use return here
    // this 6000 is wait time for first bounceIn animation
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1000) 
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          idx={15}
        />
        </h1>
      </div>
      <p>
        An established IT company that offers the opportunity to work with the
        latest technologies on challenging and diverse projects is what I am
        looking for as an ambitious automation developer.
      </p>
      <p>
        I have a calm and self-assured attitude, a keen interest in learning new
        things, and a constant drive to enhance my abilities.
      </p>
      <p>
        If I need to define myself in one sentence that would be a family
        person, a sports fanatic, photography enthusiast, and tech — obsessed!!!
      </p>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
                <FontAwesomeIcon icon={faPython} color="#4B8BBE"/>
          </div>
          <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
          </div>
          <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
          </div>
          <div className='face4'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
          </div>
          <div className='face5'>
                <FontAwesomeIcon icon={faNodeJs} color="#EFD81D"/>
          </div>
          <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
          </div>
        </div>

      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}
