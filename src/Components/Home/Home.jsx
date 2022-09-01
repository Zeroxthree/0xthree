import Navbar from "../Navbar/Navbar";
import Main from "./Main";
import Three from "./Three";
import Hot from "./Hot";
import New from './New'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Main />
      <Three />
      <Hot />
      <New/>
    </div>
  );
};

export default Home;
