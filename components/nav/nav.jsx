import { useState, useEffect } from "react";
import styles from "./nav.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false); // State to control navbar visibility
  const [timer, setTimer] = useState(null); // Timer for hiding the navbar

  // Function to show the navbar and reset the timer
  const showNavbar = () => {
    setNavbarVisible(true); // Show the navbar
    clearTimeout(timer); // Clear the existing timer
    const newTimer = setTimeout(() => {
      setNavbarVisible(false); // Hide the navbar after 10 seconds
    }, 10000); // 10 seconds
    setTimer(newTimer); // Store the new timer
  };

  // Add touch event listener to show the navbar
  useEffect(() => {
    const handleTouch = () => {
      showNavbar();
    };

    // Add touch event listener
    window.addEventListener("touchstart", handleTouch);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("touchstart", handleTouch);
      clearTimeout(timer); // Clear the timer on unmount
    };
  }, [timer]);

  // // Function to handle navigation clicks
  // const handleNavClick = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  //   setMenuOpen(false); // Close the mobile menu after clicking a link
  //   showNavbar(); // Show the navbar and reset the timer
  // };

  const handleNavClick = (sectionId) => {
    console.log(`Attempting to scroll to section: ${sectionId}`); // Debugging
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(`Section found: ${sectionId}`); // Debugging
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section not found: ${sectionId}`); // Debugging
    }
    setMenuOpen(false); // Close the mobile menu after clicking a link
    showNavbar(); // Show the navbar and reset the timer
  };
  
  return (
    <nav
      className={`${styles.navbar} ${navbarVisible ? styles.visible : styles.hidden}`}
    >
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