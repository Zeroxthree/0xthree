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


const Home = () => {
 
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
      
    </div>
  );
};

export default Home;
