import { useState, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import styles from "./nav.module.css";

// Kick off the polyfill
smoothscroll.polyfill();

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [timer, setTimer] = useState(null);

  const showNavbar = () => {
    setNavbarVisible(true);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setNavbarVisible(false);
    }, 10000);
    setTimer(newTimer);
  };

  useEffect(() => {
    const handleTouch = () => {
      showNavbar();
    };

    window.addEventListener("touchstart", handleTouch);
    return () => {
      window.removeEventListener("touchstart", handleTouch);
      clearTimeout(timer);
    };
  }, [timer]);

  const handleNavClick = (sectionId) => {
    console.log(`Attempting to scroll to section: ${sectionId}`); // Debugging
    if (typeof window !== "undefined") {
      const section = document.getElementById(sectionId);
      if (section) {
        console.log(`Section found: ${sectionId}`); // Debugging
        const offset = 80; // Adjust this value if needed
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      } else {
        console.error(`Section not found: ${sectionId}`); // Debugging
      }
    }
    setMenuOpen(false);
    showNavbar();
  };

  return (
    <nav className={`${styles.navbar} ${navbarVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.logo} onClick={() => handleNavClick("home")}>
        <img src="./images/LOCnavLogo.png" alt="Logo" />
      </div>
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
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