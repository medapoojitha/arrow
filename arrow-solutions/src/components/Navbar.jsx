import { Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";


export default function Navbar() {
  return (
    <header style={styles.navbar}>
      <div>
        {/* <img src={logo} alt="Logo" style={styles.logo} /> */}
      </div>

      <nav style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/impact" style={styles.link}>Impact</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/process" style={styles.link}>Process</Link>
        <Link to="/" style={styles.link}>Gallery</Link>
        <Link to="/partners" style={styles.link}>Partners</Link>
        <Link to="/ourwork" style={styles.link}>Our Work</Link>
        <Link to="/" style={styles.link}>Leadership</Link>
      </nav>

      <Link to="/contact" style={{...styles.button, textDecoration: 'none'}}>Contact Us</Link>
    </header>
  );
}

const styles = {
  navbar: {
    width: "100%",
    height: "95px",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 60px",
    boxSizing: "border-box",
  },
  logo: {
    width: "140px",
    height: "auto",
  },
  navLinks: {
    display: "flex",
    gap: "28px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#374151",
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    background: "#159947",
    color: "white",
    border: "none",
    padding: "14px 28px",
    borderRadius: "18px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
  },
};