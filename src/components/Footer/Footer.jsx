import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <div className="footerTopWrapper">
                <div className="footerItem">
                    <h2 className="footerTitle">
                        inStock
                    </h2>
                </div>

                <div className="footerItem">
                    <p className="footerAbout">About Us</p>
                    <p className="footerAbout">Terms & Condition</p>
                    <p className="footerAbout">Privacy Policy</p>
                </div>

                <div className="footerItem">
                    <p className="footerContact">
                        Contact Us : 11111
                    </p>
                </div>
            </div>

            <div className="footerBtmWrapper">
                <div className="footerItem">
                    All Rights Reserved For Hassan ALy
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer