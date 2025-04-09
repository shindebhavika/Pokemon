import React from "react";

export default function CarDetail({ car, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 9999,
        padding: "1rem",
      }}
      className="overflow-y-auto"
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          overflow: "hidden",
          maxWidth: "700px",
          width: "100%",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          fontFamily: "'Poppins', sans-serif",
          animation: "fadeIn 0.3s ease-in-out"
        }}
      >
        {/* Image Section */}
        <div style={{ position: "relative" }}>
         
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "#000000aa",
              border: "none",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "50px",
              fontSize: "0.9rem",
              cursor: "pointer",
              backdropFilter: "blur(4px)"
            }}
          >
            ✕
          </button>
        </div>

        {/* Details Section */}
        <div style={{ padding: "1.5rem" }}>
          <h2 style={{ marginBottom: "0.3rem", fontSize: "1.8rem", color: "#333" }}>
            {car.make} {car.model} <span style={{ fontWeight: "normal", color: "#777" }}>({car.year})</span>
          </h2>
          <p style={{ marginBottom: "0.8rem", fontSize: "1.1rem", color: "#4CAF50" }}>
            <strong>RS.{car.price.toLocaleString()}</strong>
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.8rem",
            fontSize: "0.95rem",
            color: "#555"
          }}>
            <p><strong>Color:</strong> {car.color}</p>
            <p><strong>Mileage:</strong> {car.mileage.toLocaleString()} miles</p>
            <p><strong>Fuel:</strong> {car.fuelType}</p>
            <p><strong>Transmission:</strong> {car.transmission}</p>
            <p><strong>Engine:</strong> {car.engine}</p>
            <p><strong>Horsepower:</strong> {car.horsepower} hp</p>
            <p><strong>Model:</strong> {car.model || "N/A"}</p>
            <p><strong>Make:</strong> {car.make || "N/A"}</p>
            <p><strong>Owners:</strong> {car.owners}</p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-between items-start gap-6 mt-3">
  {/* Features */}
  {car.features?.length > 0 && (
    <div className="flex-1 min-w-[260px]">
      <strong className="text-lg">Features:</strong>
      <ul className="pl-5 mt-2 list-disc">
        {car.features.map((feature, index) => (
          <li key={index} className="mb-1">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* Image */}
  <div className="flex-1 min-w-[260px] text-center">
    <img
      src={car.image}
      alt={`${car.make} ${car.model}`}
      className="w-full max-w-28 rounded-lg object-cover h-28"
    />
  </div>
</div>


          {/* Close Button */}
          <div style={{ marginTop: "2rem", textAlign: "right" }}>
            <button
              onClick={onClose}
              style={{
                padding: "0.7rem 1.4rem",
                backgroundColor: "#854CE6",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background 0.3s ease"
              }}
              onMouseOver={e => (e.target.style.backgroundColor = "#6f3ecb")}
              onMouseOut={e => (e.target.style.backgroundColor = "#854CE6")}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
