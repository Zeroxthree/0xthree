import {Link} from 'react-router-dom'

const Three = () => {
  return (
    <div className='three'>
        <span>Let's Build</span>
        <h3>Empowering Web3 community</h3>
        <div className="three__cards">
            <Link to='/'>
                <img src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/three/Group%2010131.png?token=GHSAT0AAAAAABXQBFY3TOSCMTAD44ZBH6E2YYQLBSQ" alt="learn" />
            </Link>
            <Link to='/'>
                <img src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/three/Group%2010162.png?token=GHSAT0AAAAAABXQBFY3VME73EBWM6YBH6MUYYQLBUA" alt="contribute" />
            </Link>
            <Link to='/'>
                <img src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/three/Group%2010163.png?token=GHSAT0AAAAAABXQBFY2IAXGWSMYXFWV37NIYYQLBWA" alt="rewards" />
            </Link>
        </div>
    </div>
  )
}

export default Three