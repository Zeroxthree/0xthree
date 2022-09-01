import {Link} from 'react-router-dom'

const Three = () => {
  return (
    <div className='three'>
        <span>Let's Build</span>
        <h3>Empowering Web3 community</h3>
        <div className="three__cards">
            <Link to='/'>
                <img src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/three/Group%2010131.png?token=GHSAT0AAAAAABXQBFY2FDIWKVYOQ3KS5KPUYYQHTWQ" alt="learn" />
            </Link>
            <Link to='/'>
                <img src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/three/Group%2010162.png?token=GHSAT0AAAAAABXQBFY2DOB2VBEVFD5LRS6IYYQHTXQ" alt="contribute" />
            </Link>
            <Link to='/'>
                <img src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/three/Group%2010163.png?token=GHSAT0AAAAAABXQBFY3VPO5JBFNLVTPHSVCYYQHTYA" alt="rewards" />
            </Link>
        </div>
    </div>
  )
}

export default Three