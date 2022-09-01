import React from 'react'
import Socials from '../Socials/Socials'
import './Home.css'

const Main = () => {
  return (
    <div className='main'>
        <span className="main__welcome">
            Welcome to 0xthree
        </span>

        <h1 className="main__heading">
            your <span className="genesius">Genesius </span><span className="web3">of web3 learning</span>
        </h1>

        <img src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/gif/animation_500_l7btuf2b.gif?token=GHSAT0AAAAAABXQBFY3YUZQR7NQE7A3T6NSYYQLDIA" alt="scroll__gif" className="scroll__gif" />

        <Socials className='main-socials'/>
    </div>
  )
}

export default Main