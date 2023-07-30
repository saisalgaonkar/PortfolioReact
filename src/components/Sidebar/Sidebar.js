import React from 'react'
import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/saiprasad-salgaonkar-2a923b18b"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/saisalgaonkar"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/mr__morbius?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4d" />
          </a>
        </li>
      </ul>
    </div>
  )
}
