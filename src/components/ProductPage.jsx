// src/components/ProductPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// картинки (добавь свои!)
import futbolkaami from "../images/futbolkaami.png";
import bazafutbolka from "../images/bazafutbolka.png";
import nikeforce from "../images/nikeairforce.png";
import nikeairjordan from "../images/nikeairjordan.png";
import diorbraclet from "../images/diorbraclet.png";

const products = {
  futbolkaami: {
    name: "Футболка Ami",
    price: "1999 тг.",
    oldPrice: "2999 тг.",
    description: "Удобная футболка из хлопка. Отлично подходит для повседневной носки.",
    images: [futbolkaami, bazafutbolka, futbolkaami],
    sizes: ["S", "M", "L", "XL"],
  },
  bazafutbolka: {
    name: "База футболка",
    price: "1999 тг.",
    oldPrice: "2499 тг.",
    description: "Классическая базовая футболка. Отличный вариант на каждый день.",
    images: [bazafutbolka],
    sizes: ["S", "M", "L", "XL"],
  },
  nikeforce: {
    name: "Nike Air Force",
    price: "1999 тг.",
    oldPrice: "2499 тг.",
    description: "Легендарные кроссовки Nike Air Force.",
    images: [nikeforce],
    sizes: ["40", "41", "42", "43"],
  },
  nikeairjordan: {
    name: "Nike Air Jordan",
    price: "1999 тг.",
    oldPrice: "2999 тг.",
    description: "Культовые Nike Air Jordan. Выбор настоящих фанатов.",
    images: [nikeairjordan],
    sizes: ["40", "41", "42", "43"],
  },
  diorbraclet: {
    name: "Dior Браслет",
    price: "1999 тг.",
    oldPrice: "2599 тг.",
    description: "Стильный браслет Dior для настоящих ценителей.",
    images: [diorbraclet],
    sizes: ["One Size"],
  },
};

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products[id];

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
        {/* Левая часть: фото */}
        <div className="product-card-left-section" style={{ flex: 1 }}>
          <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
            ⬅ Назад
          </button>
          <h2>{product.name}</h2>
          <div className="product-imgs">
            <img src={product.images[0]} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={product.name}
                  style={{ width: "80px", cursor: "pointer", borderRadius: "6px" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Правая часть: инфо */}
        <div className="product-card-right-section" style={{ flex: 1 }}>
          <div className="product-card-price">
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#d1001c" }}>
              {product.price}
            </div>
            <div style={{ textDecoration: "line-through", color: "#777" }}>{product.oldPrice}</div>
          </div>
          <p style={{ marginTop: "1rem" }}>{product.description}</p>
          <div className="product-card-size" style={{ marginTop: "1rem" }}>
            <h4>Выбрать размер:</h4>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              {product.sizes.map((size, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #333",
                    padding: "5px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <button
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
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;