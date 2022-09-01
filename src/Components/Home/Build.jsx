import {Link} from 'react-router-dom'

const Build = () => {
  return (
    <div className='build'>
        <span>Let's Build</span>
        <h3>Empowering Web3 community</h3>
        <div className="build__cards">
            <Link to='/'>
                <img src="../assets/three/Group 10131.png" alt="learn" />
            </Link>
        </div>
    </div>
  )
}

export default Build