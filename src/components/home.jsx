// src/components/home.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// стили
import "../css/header.css";
import "../css/main.css";
import "../css/footer.css";
import "../css/login.css";
import "../css/sign-up.css";

// картинки
import qaraaLogo from "../images/qaraa.png";
import exampleImg from "../images/qaraa.png";
import youdiorbracletw from "../images/youdiorbracletw.png";
import youdiorbracletm from "../images/youdiorbracletm.png";
import youamifutbolkaw from "../images/youamifutbolkaw.png";
import youamifutbolkam from "../images/youamifutbolkam.png";
import youpoloswiterw from "../images/youpoloswiterw.png";
import youpoloswiterm from "../images/youpoloswiterm.png";
import yousvtrikow from "../images/yousvtrikow.png";
import yousvtrikom from "../images/yousvtrikom.png";
import youairforcew from "../images/youairforcew.png";
import youairforcem from "../images/youairforcem.png";
import youairjordanw from "../images/youairjordanw.png";
import youairjordanm from "../images/youairjordanm.png";
import rectangleImg from "../images/rectangle.svg";
import bazafutbolka from "../images/bazafutbolka.png";
import nikeforce from "../images/nikeairforce.png";
import svtriko from "../images/svtriko.png";
import nikeairjordan from "../images/nikeairjordan.png";
import futbolkaami from "../images/futbolkaami.png";
import diorbraclet from "../images/diorbraclet.png";
import poloswiter from "../images/poloswiter.png";

function Home() {
  const footerRef = useRef(null);
  const galleryRef = useRef(null);
  const shopRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToShop = () => {
    if (shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      {/* =============== HEADER =============== */}
      <header className="header">
        <div className="left-section">
          <div className="mobile-toggle">
          </div>
          <div className="logo">
            <Link to="/">
              <img src={qaraaLogo} alt="Logo" className="logo" />
            </Link>
          </div>
          <nav>
            <ul className="ul" id="ul">
              <li>
                <button
                  className="nav-button"
                  onClick={scrollToShop}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#333",
                    padding: 0,
                    fontFamily: "inherit",
                  }}
                >
                  SHOP
                </button>
              </li>
              <li>
                <button
                  className="nav-button"
                  onClick={scrollToGallery}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#333",
                    padding: 0,
                    fontFamily: "inherit",
                  }}
                >
                  GALLERY
                </button>
              </li>
              <li>
                <button
                  className="nav-button"
                  onClick={scrollToFooter}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#333",
                    padding: 0,
                    fontFamily: "inherit",
                  }}
                >
                  CONTACTS
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="logo_2">
          <Link to="/">
            <img src={qaraaLogo} alt="Logo" className="logo_2" />
          </Link>
        </div>
        <div className="right-section">
          <div className="whole-cart-window">
            <div className="cart">
              <h2 className="cart-title">YOUR CART</h2>
              <div className="cart-item-info"></div>
              <div className="cart-submit"></div>
              <h1 className="cart-empty" hidden>
                Empty.
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* =============== MAIN CONTENT =============== */}
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="welcome-message" style={{ color: "black" }}>
            qaraa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            shop
            <div
              className="welcome-message-inside"
              style={{
                color: "rgb(81, 0, 0)",
                fontWeight: 1600,
                marginTop: "30px",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              online
            </div>
            <img src={qaraaLogo} alt="" className="welcome-logo" />
          </div>
        </section>

        {/* New Drop */}
        <section className="new-drop">
          <div className="marquee">
            {Array(10)
              .fill("NEW DROP")
              .map((text, i) => (
                <p
                  key={i}
                  className="marquee-item"
                  style={{ color: "rgb(173, 0, 26)" }}
                >
                  {text}
                </p>
              ))}
          </div>

          <div className="new">
            <div className="new-grid">
              {/* <a href="#">
                <img src={exampleImg} alt="sakura-img" className="new-img" />
              </a> */}
            </div>
            <div className="new-text-one" style={{ color: "black" }}>
            </div>
          </div>

          <div className="marquee">
            {Array(10)
              .fill("NEW DROP")
              .map((text, i) => (
                <div
                  key={i}
                  className="marquee-item"
                  style={{ color: "rgb(173, 0, 26)" }}
                >
                  {text}
                </div>
              ))}
          </div>
        </section>

        {/* Shop */}
        <section className="shop-container" ref={shopRef}>
          <div className="section-title">
            <div className="shop-content">
              <Link className="product-box" to="/product/poloswiter">
                <img src={rectangleImg} alt="" className="rectangle" />
                <img src={poloswiter} alt="product" className="product-img" />
                <div className="product-title">Polo Ralph Lauren свитер</div>
                <div className="product-prices">
                  <span className="product-price-new">9.990 тг.</span>
                  <span className="product-price-old">15000 тг.</span>
                </div>
              </Link>
              <Link className="product-box" to="/product/futbolkaami">
                <img src={rectangleImg} alt="" className="rectangle" />
                <img src={futbolkaami} alt="product" className="product-img" />
                <div className="product-title">Футболка AMI Paris</div>
                <div className="product-prices">
                  <span className="product-price-new">4.990 тг.</span>
                  <span className="product-price-old">7000 тг.</span>
                </div>
              </Link>
              <Link className="product-box" to="/product/bazafutbolka">
                <img src={rectangleImg} alt="" className="rectangle" />
                <img src={bazafutbolka} alt="product" className="product-img" />
                <div className="product-title">База Футболка</div>
                <div className="product-prices">
                  <span className="product-price-new">3.490 тг.</span>
                  <span className="product-price-old">5000 тг.</span>
                </div>
              </Link>
              <Link className="product-box" to="/product/svtriko">
                <img src={rectangleImg} alt="" className="rectangle" />
                <img src={svtriko} alt="product" className="product-img" />
                <div className="product-title">SUVENE спортивные брюки</div>
                <div className="product-prices">
                  <span className="product-price-new">9.990 тг.</span>
                  <span className="product-price-old">17000 тг.</span>
                </div>
              </Link>
              <Link className="product-box" to="/product/nikeforce">
                <img src={rectangleImg} alt="" className="rectangle" />
                <img src={nikeforce} alt="product" className="product-img" />
                <div className="product-title">Nike Air Force</div>
                <div className="product-prices">
                  <span className="product-price-new">7.990 тг.</span>
                  <span className="product-price-old">20000 тг.</span>
                </div>
              </Link>
              <Link className="product-box" to="/product/nikeairjordan">
                <img src={rectangleImg} alt="" className="rectangle" />
                <img src={nikeairjordan} alt="product" className="product-img" />
                <div className="product-title">Nike Air Jordan</div>
                <div className="product-prices">
                  <span className="product-price-new">7.990 тг.</span>
                  <span className="product-price-old">20000 тг.</span>
                </div>
              </Link>
              <Link className="product-box" to="/product/diorbraclet">
                <img src={rectangleImg} alt="" className="rectangle" />
                <img src={diorbraclet} alt="product" className="product-img" />
                <div className="product-title">Dior Браслет</div>
                <div className="product-prices">
                  <span className="product-price-new">2.990 тг.</span>
                  <span className="product-price-old">5000 тг.</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section ref={galleryRef}>
          <div className="gallery-container">
            <div className="gallery-you">
              <h1>YOU</h1>
            </div>
            <div className="gallery-img">
              <img src={youpoloswiterm} alt="gallery" />
            </div>
            <div className="gallery-img">
              <img src={youpoloswiterw} alt="gallery" />
            </div>
            <div className="gallery-img">
              <img src={youamifutbolkam} alt="gallery" />
            </div>
            <div className="gallery-img">
              <img src={youamifutbolkaw} alt="gallery" />
            </div>
            <div className="gallery-img">
              <img src={yousvtrikom} alt="gallery" />
            </div>
            <div className="gallery-img">
              <img src={yousvtrikow} alt="gallery" />
            </div>
            <div className="gallery-img">
              <img src={youairjordanw} alt="gallery" />
            </div>
            <div className="gallery-img">
              <img src={youairjordanm} alt="gallery" />
            </div>
            <div className="gallery-img">
              <img src={youairforcew} alt="gallery" />
            </div>
            <div className="gallery-img">
              <img src={youairforcem} alt="gallery" />
            </div>
            <div className="gallery-img">
              <img src={youdiorbracletm} alt="gallery" />
            </div>
            <div className="gallery-img">
              <img src={youdiorbracletw} alt="gallery" />
            </div>
          </div>
          <div className="popup-img">
            <img src="" alt="" />
          </div>
        </section>
      </main>

      {/* =============== FOOTER =============== */}
      <footer className="footer" ref={footerRef}>
        <div className="footer-content">
          <h3 className="logo-text">qaraa kz</h3>
          <div className="addition">
            <Link to="/dostavka">Доставка</Link>
            <a href="/vozvrat" target="_blank" rel="noreferrer">
              Условия возврата товара
            </a>
            <a href="/politika" target="_blank" rel="noreferrer">
              Политика конфиденциальности
            </a>
          </div>
          <ul className="socials">
            <li>
              <a
                href="https://www.instagram.com/qaraa.kz/"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="bx bxl-instagram-alt bx-tada"
                  id="social-network-icon"
                ></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/7778307588" target="_blank" rel="noreferrer">
                <i
                  className="bx bxl-whatsapp bx-tada"
                  id="social-network-icon"
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@qaraa.kz"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-tiktok bx-tada"></i>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/qaraa_kz"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="bx bxl-telegram bx-tada"
                  id="social-network-icon"
                ></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy;2025 qaraa kz.</p>
          <p>
            Created by <span>srk</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;