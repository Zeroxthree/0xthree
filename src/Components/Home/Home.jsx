import Navbar from "../Navbar/Navbar";
import Main from "./Main";
import Three from "./Three";
import Hot from "./Hot";
import New from './New'
import './Home.css'
import Trust from './Trust'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Main />
      <Three />
      <Hot />
      <New/>
      <Trust/>
      <Newsletter/>
    </div>
  );
};

export default Home;
