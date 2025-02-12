import { useState } from "react";
import styles from "./nav.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo} onClick={() => handleNavClick("home")}>
        <img src="./images/LOCnavLogo.png" alt="Logo" />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        {[
          { label: "Home", id: "home" },
          { label: "Meet the Perrins", id: "meetPerrins" },
          { label: "Our Mission", id: "mission" },
          { label: "Our Services", id: "services" },
          { label: "Location", id: "location" },
          { label: "Name and Logo Story", id: "about" },
          { label: "Contact Us", id: "contact" },
        ].map(({ label, id }, index) => (
          <li key={index} onClick={() => handleNavClick(id)}>
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;