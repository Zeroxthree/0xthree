import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Learn from "./Components/Learn/Learn";
import {useState, useEffect} from 'react'
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePosts from "./components/OnePosts";


function App() {
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
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
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
    </Router>
  );

  return (
    <BrowserRouter>
       <div>
       <Route component={AllPosts} path="/allposts" exact />
       <Route component={OnePosts} path="/:slug" />
       </div>
    </BrowserRouter>
  )
}

export default App;
