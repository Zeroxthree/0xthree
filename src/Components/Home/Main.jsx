import React from 'react'
import Socials from '../Socials/Socials'
import './Home.css'
import ScrollGif from "../../assets/gif/scroll.gif";


const Main = () => {
  return (
    <div className='main'>
        <span className="main__welcome">
            Welcome to 0xthree
        </span>

        <h1 className="main__heading">
            your <span className="genesius">Genesius </span><span className="web3">of web3 learning</span>
        </h1>

        <img src={ScrollGif} alt="scroll__gif" className="scroll__gif" />

        <Socials className='main-socials'/>
    </div>
  )
}

export default Main