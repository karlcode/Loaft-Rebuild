import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>loaft digital</h1>
        <p>Futureproof software design from Sydney, Australia</p>
        
    </header>
)

export default Header
