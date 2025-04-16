import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function CarDetail() {
  const location = useLocation();
  const pokemon = location.state.data;
  console.log(location);
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        overflow: "hidden",
        maxWidth: "700px",
        width: "100%",
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        fontFamily: "'Poppins', sans-serif",
        animation: "fadeIn 0.3s ease-in-out",
      }}
    >
      <div
        key={pokemon.id}
        className="border border-gray-300 dark:border-gray-700  rounded shadow hover:shadow-lg transition duration-300"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold dark:text-white ">{pokemon.name}</h2>
        
        </div>

        <img
          src={
            location.state.images?.[1] ||
            "https://thumbs.dreamstime.com/b/red-generic-sedan-pokemon-white-background-perspective-view-isolated-path-red-generic-sedan-pokemon-white-background-123481287.jpg"
          }
          alt={pokemon.model}
          className="w-full h-48 object-cover"
        />

        <div style={{ padding: "1rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              // gap: "0.8rem",
              fontSize: "0.95rem",
              color: "#555",
            }}
          >
            <p class="text-lg">
              <strong>Height</strong>: {pokemon.height}
            </p>
            <p class="text-lg">
              <strong>Weight</strong>: {pokemon.weight}
            </p>
            <p class="text-lg">
              <strong>Order</strong>: {pokemon.order}
            </p>
          </div>

          {/* Features */}
          {pokemon.abilities?.length > 0 && (
            <div style={{ marginTop: "1.2rem" }}>
              <strong className="dark:text-gray-300">Features:</strong>
              <ul
                style={{
                  paddingLeft: "1.2rem",
                  marginTop: "0.4rem",
                  color: "#555",
                }}
              >
                {pokemon.abilities.map((feature, index) => (
                  <li
                    className="dark:text-gray-300"
                    key={index}
                    style={{ marginBottom: "0.3rem" }}
                  >
                    {feature.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Details Section */}
      <div style={{ padding: "1.5rem" }}>
        {/* Close Button */}
        <div style={{ marginTop: "2rem", textAlign: "right" }}>
          <Link to="/">
            <button
              // onClick={onClose}
              style={{
                padding: "0.7rem 1.4rem",
                backgroundColor: "#854CE6",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#6f3ecb")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#854CE6")}
            >
              back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
