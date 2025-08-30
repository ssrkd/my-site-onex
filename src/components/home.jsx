// src/components/home.jsx
import React from "react";
import { Link } from "react-router-dom";

// стили
import "../css/header.css";
import "../css/main.css";
import "../css/footer.css";
import "../css/login.css";
import "../css/sign-up.css";

// картинки
import qaraaLogo from "../images/qaraa.png";
import exampleImg from "../images/example.jpg";
import rectangleImg from "../images/rectangle.svg";

function Home() {
  return (
    <div className="container">
      {/* =============== HEADER =============== */}
      <header className="header">
        <div className="left-section">
          <div className="mobile-toggle">
            <i className="bx bx-menu bx-tada-hover"></i>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={qaraaLogo} alt="Logo" className="logo" />
            </Link>
          </div>
          <nav>
            <ul className="ul" id="ul">
              <li>
                <Link className="shop" to="/shop">
                  SHOP
                </Link>
              </li>
              <li>
                <Link className="gallery" to="/gallery">
                  GALLERY
                </Link>
              </li>
              <li>
                <Link className="contacts" to="/contacts">
                  CONTACTS
                </Link>
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
          <div className="cart-icon">
            <i className="bx bx-shopping-bag bx-tada-hover">
              <div className="cart-number"></div>
            </i>
          </div>
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
              {/* Здесь будет fetch new_drop из API */}
              <a href="#">
                <img src={exampleImg} alt="sakura-img" className="new-img" />
              </a>
            </div>
            <div className="new-text-one" style={{ color: "black" }}>
              Sample Text
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
        <section className="shop-container">
          <div className="section-title">
            <div className="shop-content">
              {/* Здесь будет fetch products из API */}
              <a className="product-box" href="#">
                <img src={rectangleImg} alt="" className="rectangle" />
                <img src={exampleImg} alt="product" className="product-img" />
                <div className="product-title">Sample Product</div>
                <div className="product-price">1999 р.</div>
              </a>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <div className="gallery-container">
            <div className="gallery-you">
              <h1>YOU</h1>
            </div>
            {/* Здесь будет fetch gallery из API */}
            <div className="gallery-img">
              <img src={exampleImg} alt="gallery" />
            </div>
          </div>
          <div className="popup-img">
            <img src="" alt="" />
          </div>
        </section>
      </main>

      {/* =============== FOOTER =============== */}
      <footer className="footer">
        <div className="footer-content">
          <h3 className="logo-text">qaraa kz</h3>
          <div className="addition">
            <a href="/dostavka" target="_blank" rel="noreferrer">
              Доставка
            </a>
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
                href="https://www.instagram.com/thatisfranchise/"
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
              <a
                href="https://vk.com/thatisfranchise"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-tiktok bx-tada"></i>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/thatisfranchise"
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
            Created by <span>secret</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;