import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./FooterLinks.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/shopito_logo.png";

const FooterLinks = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container contact">
          <div className="contact-icon">
            <FaFacebook className="i" />
            <FaTwitter className="i" />
            <FaInstagram className="i" />
            <FaYoutube className="i" />
          </div>
          <h2>Let's Talk?</h2>
          <Link to="/" className="btn btn-dark">
            Make an enquiry !
          </Link>
        </div>
      </section>

      <section className="footer-section">
        <div className="container footer">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-menu">
            <p className="link-heading">Features</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="">Link Shorterning</a>
              </li>
              <li>
                <a href="">Branded Links</a>
              </li>
              <li>
                <a href="">Analystics</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="link-heading">Features</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="">Link Shorterning</a>
              </li>
              <li>
                <a href="">Branded Links</a>
              </li>
              <li>
                <a href="">Analystics</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="link-heading">Features</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="">Link Shorterning</a>
              </li>
              <li>
                <a href="">Branded Links</a>
              </li>
              <li>
                <a href="">Analystics</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="link-heading">Features</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="">Link Shorterning</a>
              </li>
              <li>
                <a href="">Branded Links</a>
              </li>
              <li>
                <a href="">Analystics</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default FooterLinks;
