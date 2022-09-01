import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import Socials from "../Socials/Socials";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top-left">
          <h2 className="footer__logo">0xthree.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam illo,
            numquam vel deserunt dolor in reprehenderit sed vitae neque quas
            sunt, necessitatibus unde sint quibusdam!
          </p>
        </div>
        <div className="footer__top-center">
          <h4>Quick links</h4>
          <Link className="footer-link" to="/">
            Learn
          </Link>
          <Link className="footer-link" to="/">
            Build
          </Link>
          <Link className="footer-link" to="/">
            Explore
          </Link>
        </div>
        <div className="footer__top-right">
          <h4>Newsletter</h4>
          <img
            src="https://raw.githubusercontent.com/Zeroxthree/0xthree/master/src/assets/newsletter/Group%2010165%20(1).png?token=GHSAT0AAAAAABXQBFY3OKG2GTIFGK65FPN6YYQKQVQ"
            alt="subscribe"
          />
          <div className="footer__socials">
            <Link to="/">
              <TwitterIcon
                className="social__link"
                fontSize="medium"
                sx={{ color: "#aaa", fontSize: "1.75rem" }}
              />
            </Link>
            <Link to="/">
              <GitHubIcon
                className="social__link"
                fontSize="medium"
                sx={{ color: "#aaa", fontSize: "1.75rem" }}
              />
            </Link>
            <Link to="/">
              <LinkedInIcon
                className="social__link"
                fontSize="medium"
                sx={{ color: "#aaa", fontSize: "1.75rem" }}
              />
            </Link>
          </div>
        </div>
      </div>

      <hr />
      <div className="footer__bottom">
        <span>All Rights Reserved - 0xthree</span>
      </div>
    </div>
  );
};

export default Footer;
