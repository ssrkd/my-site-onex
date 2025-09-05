// src/components/ProductPage.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/ProductCard.css";

// картинки (подставь свои пути!)
import poloswiter from "../images/poloswiter.png";
import futbolkaami from "../images/futbolkaami.png";
import bazafutbolka from "../images/bazafutbolka.png";
import svtriko from "../images/svtriko.png";
import svtriko2 from "../images/svtriko2.png";
import nikeforce from "../images/nikeairforce.png";
import nikeforce2 from "../images/nikeairforce2.png";
import nikeforce3 from "../images/nikeairforce3.png";
import nikeairjordan from "../images/nikeairjordan.png";
import nikeairjordan2 from "../images/nikeairjordan2.png";
import nikeairjordan3 from "../images/nikeairjordan3.png";
import diorbraclet from "../images/diorbraclet.png";

const products = {
  poloswiter: {
    id: "poloswiter",
    name: "Polo Ralph Lauren свитер",
    price_new: "9.990",
    price_old: "15000",
    description: "Тёмно-синий свитер Polo Ralph Lauren с вышитым флагом США. Выполнен из мягкого хлопка, комфортный и стильный вариант для прохладной погоды. Подходит как для повседневной носки, так и для особых случаев.",
    images: [poloswiter],
    sizes: ["S", "M", "L", "XL"],
  },
  futbolkaami: {
    id: "futbolkaami",
    name: "Футболка Ami",
    price_new: "1999",
    price_old: "2999",
    description: "Удобная футболка из хлопка. Отлично подходит для повседневной носки.",
    images: [futbolkaami],
    sizes: ["S", "M", "L", "XL"],
  },
  bazafutbolka: {
    id: "bazafutbolka",
    name: "База футболка",
    price_new: "1999",
    price_old: "2499",
    description: "Классическая базовая футболка. Отличный вариант на каждый день.",
    images: [bazafutbolka],
    sizes: ["S", "M", "L", "XL"],
  },
  svtriko: {
    id: "svtriko",
    name: "SV",
    price_new: "1999",
    price_old: "2499",
    description: "Классическая базовая футболка. Отличный вариант на каждый день.",
    images: [svtriko, svtriko2],
    sizes: ["S", "M", "L", "XL"],
  },
  nikeforce: {
    id: "nikeforce",
    name: "Nike Air Force",
    price_new: "1999",
    price_old: "2499",
    description: "Легендарные кроссовки Nike Air Force.",
    images: [nikeforce, nikeforce2, nikeforce3],
    sizes: ["40", "41", "42", "43"],
  },
  nikeairjordan: {
    id: "nikeairjordan",
    name: "Nike Air Jordan",
    price_new: "1999",
    price_old: "2999",
    description: "Культовые Nike Air Jordan. Выбор настоящих фанатов.",
    images: [nikeairjordan, nikeairjordan2, nikeairjordan3],
    sizes: ["40", "41", "42", "43"],
  },
  diorbraclet: {
    id: "diorbraclet",
    name: "Dior Браслет",
    price_new: "1999",
    price_old: "2599",
    description: "Стильный браслет Dior для настоящих ценителей.",
    images: [diorbraclet],
    sizes: ["One Size"],
  },
};

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products[id];
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Товар не найден</h2>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    );
  }

  return (
    <section className="product-card-section" style={{ padding: "2rem" }}>
      <div className="product-card-preview" style={{ display: "flex", gap: "2rem" }}>
        {/* Левая часть */}
        <div className="product-card-left-section" style={{ flex: 1 }}>
          {/* Заголовок + стрелка */}
          <div
            className="product-card-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
              position: "relative",
            }}
          >
            <button
              onClick={() => navigate(-1)}
              className="product-card-back"
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span className="back-text">Назад</span>
            </button>

            <div
              className="product-card-title"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              {product.name}
            </div>
          </div>

          <div className="product-imgs">
            {/* Главное фото */}
            <div className="img-display">
              <div className="img-showcase">
                <img
                  src={product.images[activeImg]}
                  alt={product.name}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
            </div>

            {/* Миниатюры */}
            <div className="img-select" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className="img-item"
                  onClick={() => setActiveImg(i)}
                  style={{
                    border: activeImg === i ? "2px solid #d1001c" : "1px solid #ccc",
                    borderRadius: "6px",
                    padding: "2px",
                    cursor: "pointer",
                  }}
                >
                  <img src={img} alt={product.name} style={{ width: "70px", borderRadius: "6px" }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Правая часть */}
        <div className="product-card-right-section" style={{ flex: 1 }}>
          <div className="product-card-price" style={{ marginBottom: "1rem" }}>
            <div className="product-card-price-new" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#d1001c" }}>
              {product.price_new} тг.
            </div>
            <div className="product-card-price-old" style={{ textDecoration: "line-through", color: "#777" }}>
              {product.price_old} тг.
            </div>
          </div>

          <pre
            className="product-card-description-materials"
            style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", marginBottom: "1rem" }}
          >
            {product.description}
          </pre>

          {/* Выбор размера */}
          <div className="product-card-size" style={{ marginTop: "1rem" }}>
            <div className="product-card-choose-size" style={{ marginBottom: "8px", fontWeight: "bold" }}>
              ВЫБРАТЬ РАЗМЕР:
            </div>
            <div className="product-card-choose-size-2" style={{ display: "flex", gap: "10px" }}>
              {product.sizes.map((size, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    border: selectedSize === size ? "2px solid #d1001c" : "1px solid #333",
                    padding: "5px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    background: selectedSize === size ? "#ffe6ea" : "transparent",
                  }}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <button
  className="product-card-buy"
  style={{
    marginTop: "1.5rem",
    padding: "12px 20px",
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
  }}
  onClick={() => {
    if (!selectedSize) {
      alert("Выберите размер!");
      return;
    }
    const message = `Здравствуйте! Хочу заказать: ${product.name}, размер ${selectedSize}`;
    const url = `https://wa.me/77778307588?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
>
  ЗАКАЗАТЬ
</button>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;