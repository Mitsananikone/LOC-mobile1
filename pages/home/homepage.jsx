import React, { useState, useEffect } from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import styles from "./homepage.module.css";

function HomePage() {
  const [showPopup, setShowPopup] = useState(true);
  const [animateParallelograms, setAnimateParallelograms] = useState(false);
  const [fadeInImages, setFadeInImages] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
    setAnimateParallelograms(true); // Begin parallelogram animation
    setTimeout(() => setFadeInImages(true), 1000); // Delay image fade-in
  };

  return (
    <div className={styles.homeContainer}>
      {/* Popup Modal */}
      {showPopup && (
        <div className={styles.popupContainer}>
          <h1 className={styles.popupTitle}>GREETINGS CARY!</h1>
          <p className={styles.popupContent}>
           Greetings from Mit Sananikone!  This pop up is not part of the website, it's an introduction which I will remove on the real thing.  I wanted to give you some insight on this website and to tell you a little about myself. <br/><br/>

          <b> This should only be viewed on a PC.  Reformatting it for tablets and phones is time consuming, and should come at the end when we have a finalized project.  If you browse the site in anything other than a PC, it will look really confusing!</b>  <br/><br/>

           This is not the website -It's a demonstration of my skill to assure you that I can get the job done.  It usually takes 2 coding disciplines to create and deploy a website to the web, Front-End developers code how the website looks and backend developers code the stuff you don't see to make it work on the world wide web.  I'm a fullstack developer, so I did both parts myself.  <br/><br/>
           I took the information from the LOC booklet my Dad gave me and arranged it into a website.  My thought process was to make it simple an easy to read, with as few distractions as possible.  Whereas pictures, image backgrounds and cool effects look nice, I thought it would be difficult and distracting for the older demographic (which, from going to Heights, seems to be a big portion of the congregation).  I followed the tri-color wheel you gave me (thanks for that!).  <br/><br/>
           I would very much like to sit down and talk about how you envision the site:  Will it have a similar feel to heightschurch.org?  Would you like it to have video background?  Special effects?  These are things we can discuss! Also, the "Contact Us" form at the bottom is functional and sends the user's input info to a designated email address (My email for the time being).  <br/><br/>
           My email address is mitsananikone@gmail.com and my phone number is (832) 620 3026 (I prefer text for the first call).  Have a wonderful week!
           -Mit Sananikone

          </p>
          <button className={styles.closeButton} onClick={handleClosePopup}>
            Close
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className={styles.contentContainer}>
        <div className={`${styles.hidden} ${animateParallelograms ? styles.animateLeft : ""}`}>
          <Parallelogram
            width="550px"
            height="500px"
            color="var(--primary-color)"
            top="-5vh"
            left="5vw"
          >
            <div className={styles.parallelogramContent}>
              <h1 className={styles.title}>LIVING</h1>
              <h1 className={styles.title}>OAKS</h1>
              <h1 className={styles.title}>CHURCH</h1>
              <h6>
                <p className="whiteText">
                  ...that they may be called oaks of righteousness, the planting of the Lord, that
                  he may be glorified. <br /> - Isaiah 61:3
                </p>
              </h6>
              <div className={styles.separationLine}></div>
              <h4 className={styles.subtitle}>
                Leading REAL people to find <br /> REAL hope in Jesus.
              </h4>
            </div>
          </Parallelogram>
        </div>

        <div className={`${styles.hidden} ${animateParallelograms ? styles.animateRight : ""}`}>
          <Parallelogram
            width="400px"
            height="450px"
            top="10vh"
            left="0vw"
            color="var(--primary-color)"
            backImage="url('/images/LOCoakHomepage.jpg')"
          >
            <div className={styles.parallelogramImage}></div>
          </Parallelogram>
        </div>
      </div>

      
      {/* Image Row at the Bottom */}
      <footer className={styles.imageRow}>
        <img
          src="/images/cred_heights.png"
          alt="cred_heights"
          className={`${styles.resizedImage} ${fadeInImages ? styles.fadeIn : styles.invisible}`}
        />
        <img
          src="/images/cred_GCBA.png"
          alt="cred_GCBA"
          className={`${styles.resizedImage} ${fadeInImages ? styles.fadeIn : styles.invisible}`}
        />
        <img
          src="/images/cred_SBTC.png"
          alt="cred_SBTC"
          className={`${styles.resizedImage} ${fadeInImages ? styles.fadeIn : styles.invisible}`}
        />
        <img
          src="/images/cred_NAMB.png"
          alt="cred_NAMB"
          className={`${styles.resizedImage} ${fadeInImages ? styles.fadeIn : styles.invisible}`}
        />
      </footer>
    </div>
  );
}

export default HomePage;
