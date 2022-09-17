import "./Learn.css";
import HeroImg from "../../assets/learn/Group159.png";
import ScrollGif from "../../assets/gif/scroll.gif";
import CourseList from "./CourseList";
import TrendingImg from "../../assets/learn/Group10175.png";
import TrendingCard from "./TrendingCard";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="learn">
      <main className="flex items-center justify-center gap-4 flex-col h-[100vh]">
        <div className="learn__hero flex items-center justify-center px-[5.5rem] gap-24">
          <div className="learn__content flex flex-col text-[#E2E2E2]">
            <h1 className="text-[120px] font-bold">
              Learn <span>Web3</span>
              <br />
            </h1>
            <p className="text-6xl ">through our best content</p>
          </div>
          <img src={HeroImg} />
        </div>
        <img src={ScrollGif} className="scroll__gif w-[12rem]" />
      </main>

      <div className="learn__courseTrack pt-[7rem] flex flex-col items-center gap-8">
        <h3 className="text-center text-3xl leading-7 tracking-[.2em] text-[#e2e2e2]">
          Course Track
        </h3>

        <CourseList />
      </div>

      <div className="trending pt-[7rem] flex flex-col items-center gap-16 ">
        <h3 className="text-center text-3xl leading-7 tracking-[.2em] text-[#e2e2e2]">
          Trending Projects
        </h3>
        <div className="trending__cards flex items-center justify-center gap-6">
          <Link to="/">
            <TrendingCard img={TrendingImg} />
          </Link>
          <Link to="/">
            <TrendingCard img={TrendingImg} />
          </Link>
          <Link to="/">
            <TrendingCard img={TrendingImg} />
          </Link>
        </div>
      </div>

      <div className="learn__blogs pt-[7rem] flex flex-col items-center gap-16">
        <h3 className="text-center text-3xl leading-7 tracking-[.2em] text-[#e2e2e2]">
          Blogs
        </h3>
        
      </div>
    </div>
  );
};

export default Learn;
