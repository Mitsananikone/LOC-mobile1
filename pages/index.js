import React from "react";
import HomePage from "@/pages/home/homepage";
import MeetThePerrins from "./meetPerrins/meetPerrins";
import Mission from "./mission/mission";
import Plan from "./plan/plan";
import Resources from "./resources/resources";
import About from "./about/about";
import Contact from "./contact/contact";
import ScreenWidthDisplay from "@/components/screenWidthDisplay/ScreenWidthDisplay";

const styles = {
  centerContainer: {
    marginTop: '8vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',

    overflow: 'auto',
    zIndex: 1,
    // padding: '16px 16px', 
    // overflow: 'hidden'
  },
  // sections: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '100%',
  //   width: '100%', // Full width on mobile
  //   background: 'var(--background-color)',
  //   //  border: '1px solid blue'
  // },
  background: {
    height: 'auto', // Auto height for mobile
    width: '100%', // Full width on mobile
    margin: '20px 0', // Reduced margin for mobile
    padding: '20px', // Reduced padding for mobile
  },
  // homepageBackground: {
  //   position: 'relative',
  //   top: '0', // Reset top position for mobile
  //   //  border: '1px solid pink'
  // }
};

export default function Home() {
  return (
    <>
      <div style={styles.centerContainer}>

          {/* <div>
            <section id="home">
              <HomePage />
            </section>
          </div>  */}

          <div style={styles.background}>
            <section id="meetPerrins">
              <MeetThePerrins />
            </section>
          </div>

          {/* Uncomment and style other sections as needed */}
          {/* <div style={styles.background}>
            <section id="mission">
              <Mission />
            </section>
          </div>
          <div style={styles.background}>
            <section id="plan">
              <Plan />
            </section>
          </div>
          <div style={styles.background}>
            <section id="resources">
              <Resources />
            </section>
          </div>
          <div style={styles.background}>
            <section id="about">
              <About />
            </section>
          </div>
          <div style={styles.background}>
            <section id="contact">
              <Contact />
            </section>
          </div> */}
        </div>

      {/* <ScreenWidthDisplay /> */}
    </>
  );
}