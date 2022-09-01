import {Link} from 'react-router-dom'

const Build = () => {
  return (
    <div className='build'>
        <span>Let's Build</span>
        <h3>Empowering Web3 community</h3>
        <div className="build__cards">
            <Link>
                <img src="../assets/three/Group 10131.png" alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Build