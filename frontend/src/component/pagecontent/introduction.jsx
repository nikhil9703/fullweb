import React from "react";

const Intro = () => {
  const sectionStyle = {
    backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,workspace')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "100px 20px",
    textAlign: "center",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    margin: "0 auto",
  };

  return (
    <div style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Welcome to My Dashboard</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Explore your data, monitor progress, and gain insights with interactive visualizations.
        </p>
      </div>
    </div>
  );
};

export default Intro;
