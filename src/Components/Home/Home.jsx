import Navbar from '../Navbar/Navbar'
import Main from './Main'
import Build from './Build'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Main/>
      <Build/>
    </div>
  )
}

export default Home