import React from "react";
import ideasImg from "../../assets/ideas.jpeg";
import image2 from "../../assets/emergingtech.jpeg";
import image3 from "../../assets/webdevelopment.jpeg";


const features = [
  {
    title: "IDEAS",
    description:
      "Your centralized place to collaborate, share updates, and communicate more effectively across departments.",
    image: ideasImg,
    reverse: false,
  },
  {
    title: "Choose how you want to work",
    description:
      "Whether it's async or real-time, we give you the flexibility to create workflows that work best for your team.",
    image: image2,
    reverse: true,
  },
  {
    title: "Move faster with your tools in one place",
    description:
      "Connect all your essential tools to boost productivity without switching tabs.",
    image: image3,
    reverse: false,
  },
];

const FeatureSection = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f5f0ea" }}>
      {features.map((feature, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: feature.reverse ? "row-reverse" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ flex: "1 1 40%" }}>
            <img
              src={feature.image}
              alt={feature.title}
              style={{
                width: "100%",
                borderRadius: "1rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            />
          </div>
          <div style={{ flex: "1 1 50%" }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{feature.title}</h2>
            <p style={{ fontSize: "1rem", color: "#333" }}>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
