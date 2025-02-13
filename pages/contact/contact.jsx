import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(errorData.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  // Styles
  const styles = {
    contactContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "var(--foreground-color)",
      color: "white",
      borderRadius: "20px",
      marginTop: "10vh",
      padding: "20px",
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto",
    },
    socialMediaBox: {
      backgroundColor: "var(--primary-color)",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "10vh",
      textAlign: "center",
      width: "100%",
    },
    socialMediaTitle: {
      fontSize: "1.5rem",
      marginBottom: "15px",
      color: "white",
    },
    socialMediaIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    icon: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "transform 0.2s ease",
      overflow: "hidden", // Ensure the logo doesn't overflow the circle
      ":hover": {
        transform: "scale(1.1)",
      },
    },
    logoImage: {
      width: "35px", // Adjust this size to fit inside the circle
      height: "35px", // Adjust this size to fit inside the circle
      objectFit: "contain", // Ensure the logo fits inside the circle without distortion
    },
    formContainer: {
      width: "100%",
      maxWidth: "600px",
    },
    formTitle: {
      fontSize: "2rem",
      marginBottom: "20px",
      color: "var(--primary-color)",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    inputLabel: {
      fontSize: "1.1rem",
      color: "var(--primary-color)",
    },
    inputField: {
      padding: "12px",
      border: "1px solid var(--primary-color)",
      borderRadius: "5px",
      fontSize: "1rem",
      backgroundColor: "white",
      color: "var(--primary-color)",
    },
    textarea: {
      padding: "12px",
      border: "1px solid var(--primary-color)",
      borderRadius: "5px",
      fontSize: "1rem",
      backgroundColor: "white",
      color: "var(--primary-color)",
      resize: "vertical",
      minHeight: "150px",
    },
    submitButton: {
      padding: "12px 25px",
      backgroundColor: "var(--primary-color)",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "1.1rem",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
      ":hover": {
        backgroundColor: "var(--secondary-color)",
      },
    },
    statusMessage: {
      marginTop: "15px",
      fontSize: "1.1rem",
      color: "var(--primary-color)",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.contactContainer}>
      {/* Social Media Box */}
      <div style={styles.socialMediaBox}>
        <h2 style={styles.socialMediaTitle}>Follow us on <br/>social media!</h2>
        <div style={styles.socialMediaIcons}>
          <div
            style={styles.icon}
            onClick={() => window.open("https://www.facebook.com/profile.php?id=61565398850141", "_blank")}
          >
            <img
              src="/images/facebook-icon.png"
              alt="Facebook"
              style={styles.logoImage}
            />
          </div>
          <div
            style={styles.icon}
            onClick={() => window.open("https://instagram.com", "_blank")}
          >
            <img
              src="/images/instagram-icon.png"
              alt="Instagram"
              style={styles.logoImage}
            />
          </div>
          <div
            style={styles.icon}
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            <img
              src="/images/x-icon.png"
              alt="Twitter"
              style={styles.logoImage}
            />
          </div>
          <div
            style={styles.icon}
            onClick={() => window.open("https://snapchat.com", "_blank")}
          >
            <img
              src="/images/snapchat-icon.png"
              alt="Snapchat"
              style={styles.logoImage}
            />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div style={styles.formContainer}>
        <h2 style={styles.formTitle}>Contact Us</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.inputLabel}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.inputField}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.inputLabel}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.inputField}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="phone" style={styles.inputLabel}>Phone (Optional):</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.inputField}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="message" style={styles.inputLabel}>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.textarea}
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Send
          </button>
        </form>
        {status && <p style={styles.statusMessage}>{status}</p>}
      </div>
    </div>
  );
}

export default Contact;