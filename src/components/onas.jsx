import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
//* стили*
import "../css/header.css";
import "../css/main.css";
import "../css/footer.css";
//* картинки*
import qaraaLogo from "../images/qaraa.png";

const Onas = () => {
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

  const Card = ({ iconClass, title, children }) => (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        border: "1px solid #f0f0f0",
        transition: "transform 0.2s",
        cursor: "default",
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
        }}
      >
        <i className={`bx ${iconClass}`} style={{ fontSize: "24px", color: "#666" }}></i>
      </div>
      <h3 style={{ fontSize: "1.3rem", fontWeight: "500", color: "#333", marginBottom: "1rem" }}>
        {title}
      </h3>
      {children}
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
            О нас
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#666", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            Современная мода для тех, кто стремится выделяться
          </p>
        </section>

        {/* Story Section */}
        <section style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem" }}>
          <div style={{ backgroundColor: "#ffffff", padding: "3rem", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "400", color: "#333", marginBottom: "2rem", textAlign: "center" }}>
              Наша история
            </h2>
            <div style={{ color: "#666", lineHeight: "1.8", fontSize: "1.1rem" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                Магазин <strong style={{ color: "#333" }}>qaraa.kz</strong> был создан в 2024 году молодым парнем, который увлекается IT и бизнесом. После небольшой паузы проект возобновил работу в 2025 году с новой энергией и идеями.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Мы каждый день развиваемся и стремимся стать лучше, чтобы предложить нашим клиентам не просто одежду, а стиль, который отражает уверенность, качество и индивидуальность.
              </p>
              <p style={{ margin: "0", fontSize: "1.2rem", fontStyle: "italic", textAlign: "center", color: "#333" }}>
                <strong>qaraa</strong> — это выбор тех, кто ценит современную моду и стремится выделяться.
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            <Card iconClass="bx-target-lock" title="Наша миссия">
              <p style={{ color: "#666", lineHeight: "1.8", margin: "0" }}>
                Предоставлять качественную одежду, которая помогает нашим клиентам выражать свою индивидуальность и уверенность.
              </p>
            </Card>

            <Card iconClass="bx-trending-up" title="Развитие">
              <p style={{ color: "#666", lineHeight: "1.8", margin: "0" }}>
                Мы постоянно совершенствуемся, изучаем новые тренды и внедряем инновационные подходы к бизнесу.
              </p>
            </Card>

            <Card iconClass="bx-heart" title="Качество">
              <p style={{ color: "#666", lineHeight: "1.8", margin: "0" }}>
                Мы тщательно отбираем товары, чтобы каждая вещь соответствовала высоким стандартам качества и стиля.
              </p>
            </Card>
          </div>

          {/* Timeline */}
          <div style={{ backgroundColor: "#ffffff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "500", color: "#333", marginBottom: "2rem", textAlign: "center" }}>Наш путь</h3>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ 
                  width: "40px", 
                  height: "40px", 
                  backgroundColor: "#f8f9fa", 
                  borderRadius: "50%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>2024</span>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "500", color: "#333", marginBottom: "0.5rem", margin: "0 0 0.5rem 0" }}>Начало пути</h4>
                  <p style={{ color: "#666", lineHeight: "1.6", margin: "0" }}>Создание магазина qaraa.kz молодым энтузиастом с passion к IT и бизнесу.</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ 
                  width: "40px", 
                  height: "40px", 
                  backgroundColor: "#333", 
                  borderRadius: "50%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}>2025</span>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "500", color: "#333", marginBottom: "0.5rem", margin: "0 0 0.5rem 0" }}>Новая энергия</h4>
                  <p style={{ color: "#666", lineHeight: "1.6", margin: "0" }}>Возобновление работы с свежими идеями и обновленным видением бренда.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={{ backgroundColor: "#f8f9fa", padding: "3rem 2rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "400", color: "#333", marginBottom: "1rem" }}>Следи за qaraa в Instagram</h3>
          {/* <p style={{ color: "#666", marginBottom: "2rem", fontSize: "1.1rem" }}>Следите за новинками и будьте в курсе всех обновлений</p> */}
          <a
            href="https://www.instagram.com/qaraa.kz/"
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
            Подписаться в Instagram
          </a>
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

export default Onas;