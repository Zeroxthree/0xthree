import { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Main from "./Main";
import Three from "./Three";
import Hot from "./Hot";
import New from "./New";
import Trust from "./Trust";
import Newsletter from "./Newsletter";
import Accordion__util from "../Accordion/Accordion";
import Footer from "../Footer/Footer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";


const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 40) {
      !isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="home">
      <Main />
      <Three />
      <Hot />
      <New />
      <Trust />
      <Newsletter />
      <div className="home__accordion">
        <h2>Welcome to 0xthree ecosystem</h2>
        <Accordion__util className="home__accordion-accordion" />
      </div>
      <div className="home__footer">
        <img
          src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/footer/background.png?token=GHSAT0AAAAAABXQBFY3TQEFU6D6YP655AV4YYQLDEA"
          alt=""
          className="bg-img"
        />
        <Footer />
      </div>
      {isVisible && (
        <div className="takeBackToTop fixed bottom-16 inline-flex text-[1.5rem] rounded-full z-50 opacity-[.9] right-16 bg-white w-6 h-6 p-8 flex items-center justify-center">
          <ArrowUpwardIcon
            onClick={scrollToTop}
            font-size="small"
            sx={{ height: "40px", width: "30px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
