import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
//* стили*
import "../css/header.css";
import "../css/main.css";
import "../css/footer.css";
//* картинки*
import qaraaLogo from "../images/qaraa.png";

const DEFAULT_REVIEWS = [
  {
    text: "Курьер доставил, очень качественный👌",
    author: "Малика",
    city: "Астана",
  },
  {
    text: "Спасибо, свитер бомба, очень качественно",
    author: "Ерлан",
    city: "Астана",
  },
//   {
//     text: "Стильно и аккуратно упаковано. Рекомендую.",
//     author: "Назым",
//     city: "Шымкент",
//   },
//   {
//     text: "Хорошая коммуникация и помощь с размером.",
//     author: "Данияр",
//     city: "Караганда",
//   },
//   {
//     text: "Фото = реальность. Спасибо!",
//     author: "Алишер",
//     city: "Актобе",
//   },
//   {
//     text: "Отличное качество материала, сидит идеально.",
//     author: "Мадина",
//     city: "Тараз",
//   }
];

const Otzyvy = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // При загрузке страницы прокручиваем вверх
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Если хочешь, чтобы кнопки SHOP и GALLERY скроллили к верху страницы
  const scrollToShop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToGallery = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ReviewCard = ({ text, author, city }) => (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "1.5rem",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        border: "1px solid #f0f0f0",
        transition: "transform 0.2s",
        cursor: "default",
        height: "fit-content",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
    >
      <p style={{ 
        color: "#333", 
        lineHeight: "1.6", 
        marginBottom: "1rem", 
        fontSize: "1rem",
        margin: "0 0 1rem 0"
      }}>
        "{text}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div
          style={{
            width: "35px",
            height: "35px",
            backgroundColor: "#f8f9fa",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: "500",
            color: "#333",
          }}
        >
          {author?.[0] ?? "?"}
        </div>
        <div>
          <div style={{ fontSize: "0.9rem", fontWeight: "500", color: "#333", lineHeight: "1.2" }}>
            {author}
          </div>
          <div style={{ fontSize: "0.8rem", color: "#666", lineHeight: "1.2" }}>
            {city}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactCard = ({ icon, title, description, link, linkText }) => (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        border: "1px solid #f0f0f0",
        transition: "transform 0.2s",
        cursor: "default",
        textAlign: "center",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#f8f9fa",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.5rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <i className={`bx ${icon}`} style={{ fontSize: "24px", color: "#666" }}></i>
      </div>
      <h3 style={{ fontSize: "1.3rem", fontWeight: "500", color: "#333", marginBottom: "1rem" }}>
        {title}
      </h3>
      <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px 24px",
          borderRadius: "4px",
          textDecoration: "none",
          fontSize: "0.9rem",
          fontWeight: "500",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#555")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#333")}
      >
        {linkText}
      </a>
    </div>
  );

  return (
    <div className="container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* HEADER */}
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
      </header>

      {/* MAIN */}
      <main style={{ flex: "1 0 auto", backgroundColor: "#fafafa", padding: "0", margin: "0" }}>
        {/* Hero */}
        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "4rem 2rem",
            textAlign: "center",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: "300", color: "#333", margin: "0 0 1rem 0" }}>
            Отзывы
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            Мнение клиентов помогает нам становиться лучше
          </p>
        </section>

        {/* Contact Cards */}
        <section style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem 2rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "400", color: "#333", marginBottom: "2rem", textAlign: "center" }}>
            Оставить отзыв
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            <ContactCard
              icon="bxl-whatsapp"
              title="WhatsApp"
              description="Напишите нам в WhatsApp и поделитесь своим мнением о покупке"
              link="https://wa.me/7778307588?text=Здравствуйте! Хочу оставить отзыв о qaraa.kz"
              linkText="Написать в WhatsApp"
            />
            
            <ContactCard
              icon="bxl-telegram"
              title="Telegram"
              description="Оставьте отзыв в Telegram - нам важно ваше мнение"
              link="https://t.me/sakurariley"
              linkText="Написать в Telegram"
            />
          </div>
        </section>

        {/* Reviews Grid */}
        <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2rem 4rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "400", color: "#333", marginBottom: "2rem", textAlign: "center" }}>
            Что говорят наши клиенты
          </h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "1.5rem",
            marginBottom: "3rem"
          }}>
            {DEFAULT_REVIEWS.map((review, index) => (
              <ReviewCard
                key={index}
                text={review.text}
                author={review.author}
                city={review.city}
              />
            ))}
          </div>

          {/* Info Block */}
          <div style={{ 
            backgroundColor: "#ffffff", 
            padding: "2rem", 
            borderRadius: "8px", 
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)", 
            border: "1px solid #f0f0f0",
            textAlign: "center"
          }}>
            <p style={{ color: "#666", lineHeight: "1.6", margin: "0", fontSize: "1rem" }}>
              💬 Публикуем только честные отзывы. Вы тоже можете написать нам в WhatsApp или Telegram.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={{ backgroundColor: "#f8f9fa", padding: "3rem 2rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "400", color: "#333", marginBottom: "1rem" }}>Поделитесь своим мнением</h3>
          <p style={{ color: "#666", marginBottom: "2rem", fontSize: "1.1rem" }}>Ваш отзыв поможет другим клиентам сделать правильный выбор</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/7778307588?text=Здравствуйте! Хочу оставить отзыв о qaraa.kz"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#333",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#555")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#333")}
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/sakurariley"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#0088cc",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#006ba8")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0088cc")}
            >
              Telegram
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer" ref={footerRef} style={{ flexShrink: 0 }}>
        <div className="footer-content">
          <h3 className="logo-text">qaraa kz</h3>
          <div className="addition">
            <Link to="/dostavka">Доставка</Link>
            <Link to="/onas">О нас</Link>
            <Link to="/otziv">Отзывы</Link>
          </div>
          <ul className="socials">
            <li>
              <a href="https://www.instagram.com/qaraa.kz/" target="_blank" rel="noreferrer">
                <i className="bx bxl-instagram-alt bx-tada"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/7778307588" target="_blank" rel="noreferrer">
                <i className="bx bxl-whatsapp bx-tada"></i>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@qaraa.kz" target="_blank" rel="noreferrer">
                <i className="bx bxl-tiktok bx-tada"></i>
              </a>
            </li>
            <li>
              <a href="https://t.me/qaraa_kz" target="_blank" rel="noreferrer">
                <i className="bx bxl-telegram bx-tada"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy;2025 qaraa kz.</p>
          <p>Created by <span>srk</span>.</p>
        </div>
      </footer>
    </div>
  );
};

export default Otzyvy;