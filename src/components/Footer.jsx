import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <ul>
                <li className='nav-item'>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Testominials</a>
                    <a href="/">Demo</a>
                </li>
            </ul>
            <div className='bottom'>
                <span className='line'></span>
                <p>2022 Execute, Inc. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer