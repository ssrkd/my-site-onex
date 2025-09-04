import React from "react";
import { Link } from "react-router-dom";
//* стили*
import "../css/header.css";
import "../css/main.css";
import "../css/footer.css";
//* картинки*
import qaraaLogo from "../images/qaraa.png";

const Dostavka = () => {
  return (
    <div className="container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/** =============== HEADER =============== **/}
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
              <li><Link className="shop" to="/shop">SHOP</Link></li>
              <li><Link className="gallery" to="/gallery">GALLERY</Link></li>
              <li><Link className="contacts" to="/contacts">CONTACTS</Link></li>
            </ul>
          </nav>
        </div>
        <div className="logo_2">
          <Link to="/">
            <img src={qaraaLogo} alt="Logo" className="logo_2" />
          </Link>
        </div>
      </header>

      {/** =============== MAIN CONTENT =============== **/}
      <main
        style={{
          flex: "1 0 auto",
          backgroundColor: "#fafafa",
          padding: "0",
          margin: "0",
          overflowY: "auto"
        }}
      >
        {/* Hero Section */}
        <section style={{
          backgroundColor: "#ffffff",
          padding: "4rem 2rem",
          textAlign: "center",
          borderBottom: "1px solid #f0f0f0"
        }}>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "300",
            color: "#333",
            margin: "0 0 1rem 0",
            letterSpacing: "1px"
          }}>
            Доставка
          </h1>
          <p style={{
            fontSize: "1.1rem",
            color: "#666",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Быстрая и надежная доставка по всему Казахстану
          </p>
        </section>

        {/* Content Grid */}
        <section style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "4rem 2rem"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem"
          }}>
            {/* Delivery Card */}
            <div style={{
              backgroundColor: "#ffffff",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              border: "1px solid #f0f0f0"
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#f8f9fa",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem"
              }}>
                <i className="bx bx-package" style={{ fontSize: "24px", color: "#666" }}></i>
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: "500",
                color: "#333",
                marginBottom: "1rem"
              }}>
                Доставка
              </h3>
              <ul style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                color: "#666",
                lineHeight: "1.8"
              }}>
                <li style={{ marginBottom: "0.5rem" }}>✓ По всему Казахстану</li>
                <li style={{ marginBottom: "0.5rem" }}>✓ Стоимость зависит от адреса</li>
                <li style={{ marginBottom: "0.5rem" }}>✓ Самовывоз доступен</li>
              </ul>
            </div>

            {/* Payment Card */}
            <div style={{
              backgroundColor: "#ffffff",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              border: "1px solid #f0f0f0"
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#f8f9fa",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem"
              }}>
                <i className="bx bx-credit-card" style={{ fontSize: "24px", color: "#666" }}></i>
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: "500",
                color: "#333",
                marginBottom: "1rem"
              }}>
                Оплата
              </h3>
              <ul style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                color: "#666",
                lineHeight: "1.8"
              }}>
                <li style={{ marginBottom: "0.5rem" }}>💳 Kaspi</li>
                <li style={{ marginBottom: "0.5rem" }}>💳 Halyk</li>
                <li style={{ marginBottom: "0.5rem" }}>💳 Freedom</li>
                <li style={{ marginBottom: "0.5rem" }}>💵 Наличными при получении</li>
              </ul>
            </div>

            {/* Location Card */}
            <div style={{
              backgroundColor: "#ffffff",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              border: "1px solid #f0f0f0"
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#f8f9fa",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem"
              }}>
                <i className="bx bx-map" style={{ fontSize: "24px", color: "#666" }}></i>
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: "500",
                color: "#333",
                marginBottom: "1rem"
              }}>
                Местоположение
              </h3>
              <p style={{
                color: "#666",
                lineHeight: "1.8",
                margin: "0"
              }}>
                📍 Астана, Казахстан<br/>
                Работаем по всей стране
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div style={{
            backgroundColor: "#ffffff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            border: "1px solid #f0f0f0"
          }}>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              color: "#333",
              marginBottom: "2rem",
              textAlign: "center"
            }}>
              Часто задаваемые вопросы
            </h3>
            <div style={{
              display: "grid",
              gap: "1.5rem"
            }}>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "500", color: "#333", marginBottom: "0.5rem" }}>
                  Сколько времени занимает доставка?
                </h4>
                <p style={{ color: "#666", lineHeight: "1.6", margin: "0" }}>
                  По Астане: 1-2 дня. По регионам Казахстана: 2-5 дней в зависимости от удаленности.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "500", color: "#333", marginBottom: "0.5rem" }}>
                  Можно ли отследить заказ?
                </h4>
                <p style={{ color: "#666", lineHeight: "1.6", margin: "0" }}>
                  Да, после отправки мы предоставим трек-номер для отслеживания посылки.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "500", color: "#333", marginBottom: "0.5rem" }}>
                  Есть ли бесплатная доставка?
                </h4>
                <p style={{ color: "#666", lineHeight: "1.6", margin: "0" }}>
                  Бесплатная доставка предоставляется при заказе от 15,000 тенге по Астане.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={{
          backgroundColor: "#f8f9fa",
          padding: "3rem 2rem",
          textAlign: "center"
        }}>
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: "400",
            color: "#333",
            marginBottom: "1rem"
          }}>
            Остались вопросы?
          </h3>
          <p style={{
            color: "#666",
            marginBottom: "2rem",
            fontSize: "1.1rem"
          }}>
            Свяжитесь с нами любым удобным способом
          </p>
          <Link
            to="/contacts"
            style={{
              display: "inline-block",
              backgroundColor: "#333",
              color: "#ffffff",
              padding: "12px 30px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              transition: "background-color 0.3s ease"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#555"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#333"}
          >
            Связаться с нами
          </Link>
        </section>
      </main>

      {/** =============== FOOTER =============== **/}
      <footer className="footer" style={{ flexShrink: 0 }}>
        <div className="footer-content">
          <h3 className="logo-text">qaraa kz</h3>
          <div className="addition">
            <Link to="/dostavka">Доставка</Link>
            <Link to="/vozvrat">Условия возврата товара</Link>
            <Link to="/politika">Политика конфиденциальности</Link>
          </div>
          <ul className="socials">
            <li>
              <a href="https://www.instagram.com/qaraa.kz/" target="_blank" rel="noreferrer">
                <i className="bx bxl-instagram-alt bx-tada"></i>
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
          <p>Created by <span>secret</span>.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dostavka;