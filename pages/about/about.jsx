import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import styles from "./about.module.css";
// import "@/styles/globals.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Flex container for logo and title */}
      <div className={styles.logoTitleContainer}>
        <div className={styles.logo}>
          <img src="./images/LOClogoBlackCircle.png" alt="Logo" />
        </div>
        <h1 className={styles.title}>About the Name and Logo</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          gap: "20px", // Optional: Adds spacing between parallelograms
        }}
      >
        {/* 1st parallelogram */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Parallelogram
            width="550px"
            height="500px"
            color="var(--secondary-color)"
            top="0vh"
            left="0vw"
          >
            <div
              style={{
                position: "relative",
                zIndex: 1,
                textAlign: "left",
                transform: "skew(20deg)",
              }}
            >
              <h2>
                Embracing a city <br /> and a promise
              </h2>
              <br />
              <p>
                The city of Alvin is known for its Southern Oak Trees. The
                city's official logo once highlighted Alvin's first meeting
                center, the Oak Tree in National Oak Park.
              </p>
            </div>
          </Parallelogram>
        </div>

        {/* 2nd parallelogram */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            marginLeft: "-50px", // Adjust for overlap
          }}
        >
          <Parallelogram
            width="500px"
            height="480px"
            color="var(--primary-color)"
            top="10vh"
            left="-5vw"
            backImage="url('/images/kintsugi.png')"
          >
            <div
              style={{
                position: "relative",
                zIndex: 1,
                textAlign: "left",
                transform: "skew(20deg)",
                color: "var(--foreground-color)",
              }}
            >
              <h2>Kintsugi means golden repair</h2>
              <br />
              <p>
                It is a Japanese art form of decorating repair seams of broken
                pottery with a precious metal, making the repaired form more
                valuable than the unbroken form. <br />
                <br />
                The Christ-follower knows this "golden repair," as well, that
                the Holy Spirit can give to a broken heart and soul.
              </p>
            </div>
          </Parallelogram>
        </div>
      </div>
    </div>
  );
}

export default About;
