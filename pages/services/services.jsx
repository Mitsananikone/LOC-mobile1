import React from "react";
import Link from "next/link"; // Use Next.js Link

function Services() {
  // Define styles
  const styles = {
    centerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "auto", // Allow the container to grow based on content
      backgroundColor: "var(--background-color)",
      padding: "20px",
      overflow: "visible", // Ensure content is visible
      maxWidth: "100vw", // Ensure it doesn't exceed the viewport width
    },
    title: {
      fontSize: "1.5rem", // Adjusted for mobile
      color: "var(--primary-color)",
      textAlign: "center",
      marginBottom: "20px",
    },
    servicesContainer: {
      display: "flex",
      flexDirection: "column", // Stack vertically on mobile
      gap: "20px", // Space between rectangles
      width: "100%",
      maxWidth: "1200px", // Limit width for desktop
      "@media (min-width: 768px)": {
        flexDirection: "row", // Arrange horizontally on desktop
        flexWrap: "wrap", // Allow wrapping on smaller desktop screens
      },
    },
    serviceRectangle: {
      flex: 1, // Each rectangle takes equal space
      minWidth: "250px", // Minimum width for desktop
      height: "200px", // Fixed height for rectangles
      borderRadius: "10px",
      overflow: "hidden",
      position: "relative",
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Add shadow effect
      ":hover": {
        transform: "scale(1.05)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)", // Enhance shadow on hover
      },
    },
    serviceImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensure the image covers the rectangle
      filter: "brightness(0.9)", // Slightly darken the image for better overlay contrast
    },
    serviceOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "1.2rem",
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
    },
    glareEffect: {
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background: "linear-gradient(45deg, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0) 50%)", // Glare effect
      transform: "rotate(30deg)",
      pointerEvents: "none", // Ensure the glare doesn't interfere with clicks
    },
  };

  // Service data with proper links
  const services = [
    { id: 1, title: "Sunday Worship", image: "/images/services-churchservice.png", link: "/services/servicesInfo/sunday-worship" },
    { id: 2, title: "Bible Study", image: "/images/services-bibleStudy.png", link: "/services/servicesInfo/bible-study" },
    { id: 3, title: "Youth Group", image: "/images/services-youthGroup.png", link: "/services/servicesInfo/youth-group" },
    { id: 4, title: "Community Outreach", image: "/images/services-communityOutreach.png", link: "/services/servicesInfo/community-outreach" },
    { id: 5, title: "Child Care", image: "/images/services-childcare.png", link: "/services/servicesInfo/child-care" },
    { id: 6, title: "Music Ministry", image: "/images/services-musicMinistery.png", link: "/services/servicesInfo/music-ministry" },
  ];

  return (
    <div style={styles.centerContainer}>
      <div>
        {/* Header */}
        <h1 style={styles.title}>
          <i className="fa-solid fa-church" aria-hidden="true"></i> Services
        </h1>

        {/* Services Grid */}
        <div style={styles.servicesContainer}>
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link} // Use `href` for Next.js Link
              style={{ textDecoration: "none", color: "inherit" }} // Remove default link styling
            >
              <div style={styles.serviceRectangle}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={styles.serviceImage}
                />
                {/* Glare Effect */}
                <div style={styles.glareEffect}></div>
                {/* Overlay with Title */}
                <div style={styles.serviceOverlay}>{service.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;