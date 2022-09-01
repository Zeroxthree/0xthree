import { Link } from "react-router-dom";

const Hot = () => {
  return (
    <div className="hot">
      <h2>Hot Topics</h2>
      <div className="hot__cards">
        <div className="hot__left">
          <Link to="/" className="hot__left-top">
            <img
              src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/tech-stack/Frame%2010151.png?token=GHSAT0AAAAAABXQBFY2MJ2MFIPYFNQVUEEWYYQHWKA"
              alt="chainlink"
            />
          </Link>
          <div className="hot__left-bottom">
            <Link to="/" className="hot__left-top">
              <img
                src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/tech-stack/Frame%2010155%20(1).png?token=GHSAT0AAAAAABXQBFY2JIGXWTK34YVTBNA2YYQHT5Q"
                alt="nft"
              />
            </Link>
            <Link to="/" className="hot__left-top">
              <img
                src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/tech-stack/Frame%2010154.png?token=GHSAT0AAAAAABXQBFY2DSLJJYBERUYKWYU4YYQHT5Q"
                alt="solidity"
              />
            </Link>
          </div>
        </div>
        <div className="hot__right">
          <Link to="/">
            <img
              src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/tech-stack/Frame%2010153.png?token=GHSAT0AAAAAABXQBFY3TKMBTUUT4XXCB6YMYYQHWMQ"
              alt="ethereum"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hot;
