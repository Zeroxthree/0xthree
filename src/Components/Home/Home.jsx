import Navbar from '../Navbar/Navbar'
import Main from '../Home/Main'

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