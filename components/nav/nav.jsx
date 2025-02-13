import { useState, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import styles from "./nav.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [timer, setTimer] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code will only run on the client
    setIsClient(true);
    smoothscroll.polyfill(); // Initialize smoothscroll polyfill
  }, []);

  const showNavbar = () => {
    setNavbarVisible(true);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setNavbarVisible(false);
    }, 10000);
    setTimer(newTimer);
  };

  useEffect(() => {
    if (isClient) {
      const handleTouch = () => {
        showNavbar();
      };

      window.addEventListener("touchstart", handleTouch);
      return () => {
        window.removeEventListener("touchstart", handleTouch);
        clearTimeout(timer);
      };
    }
  }, [timer, isClient]);

  const handleNavClick = (sectionId) => {
    if (isClient) {  // Ensure this runs only on the client side
      console.log(`Attempting to scroll to section: ${sectionId}`);
      const section = document.getElementById(sectionId);
      if (section) {
        console.log(`Section found: ${sectionId}`);
        const offset = 80; // Adjust this value if needed
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      } else {
        console.error(`Section not found: ${sectionId}`);
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
