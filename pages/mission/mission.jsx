import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import styles from "./mission.module.css";
// import "@/styles/globals.css";

function Mission() {
  const missionData = [
    {
      number: "01",
      title: "Vulnerability: Acknowledging Brokenness",
      points: [
        "LOC acknowledges openly our brokenness because of our sin (Romans 3:10-12 & 7:15-25) and recognizes our need for help.",
        "By being real people with real hurts, we create an environment where authenticity leads to healing through Christ, deepening our faith at the roots.",
        [
          "We hope to do this with an emphasis on mental and emotional health, and helping folks find Christ, the resources they need, and a community of spiritual family to better cope.",
        ],
      ],
    },
    {
      number: "02",
      title: "Engagement: Impacting Our Community & Beyond",
      points: [
        "LOC engages with our community to create positive change, fostering relationships and transcending political and cultural divisions through our focus on Jesus' greatness (Mark 12:14-17 & Ephesians 2:13-22).",
        "Our commitment to making a tangible impact in our community helps us address real hurts and build deeper connections, embodying Christ's teachings.",
        [
          "We plan to do this by partnering with local agencies that are already working to build a better Alvin for everybody and giving them the added impact our church can bring.",
        ],
      ],
    },
    {
      number: "03",
      title: "Pursuit: Bringing People Closer to Christ",
      points: [
        "LOC actively pursues those far from Christ, seeking to bring them closer to Him through acts of love, generosity, justice, and compassion (Isaiah 61:4 & James 2:14-18).",
        "By prioritizing our neighbors' needs and demonstrating Christ's love, we help others begin their healing journey and grow deeper in their faith.",
        [
          "We do this through making disciples intentionally in Connect Groups, worshipping and praying together as a church, along with community and personal outreach.",
        ],
      ],
    },
  ];

  return (
    <div className="centerContainer">
      <div className="background">
        {/* Header */}
        <h1 className="title">
          <i className="fa-solid fa-hand-holding-heart"></i> Our Mission
        </h1>

        {/* Mission Sections */}
        {missionData.map((mission, index) => (
          <div key={index} className="contentRow">
            <div className="parallelogramContainer">
              <Parallelogram
                width="100px"
                height="100px"
                color="var(--secondary-color)"
                top="0vh"
                left="0vw"
              >
                <div className={styles.missionSection}>
                  <h1
                    style={{
                      color: "var(--foreground-color)",
                      fontSize: "2.6rem",
                      fontStyle: "normal",
                    }}
                  >
                    {mission.number}
                  </h1>
                </div>
              </Parallelogram>
            </div>
            <div className={styles.textContainerRight}>
              <div>
                <h2>{mission.title}</h2>
                <br />
                <ul>
                  {mission.points.map((point, i) =>
                    Array.isArray(point) ? (
                      <ul key={i}>
                        {point.map((subPoint, j) => (
                          <li key={j}>{subPoint}</li>
                        ))}
                      </ul>
                    ) : (
                      <li key={i}>{point}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Why Alvin Section */}
        <h1 className="title">
          <i className="fa-solid fa-location-dot"></i> Why Alvin?
        </h1>
        <div className="contentRowSquareLong">
        <img
  src="/images/alvinNeighborhood.png"
  alt="Family Perrin"
  className={styles.profileImageSquare}
/>

          <p className="description">
            Simply put, the Northern Brazoria County Area is one of the fastest
            growing areas connected to Houston. The Alvin ISD is the 7th fastest
            growing school district in Texas, with a projection to grow by 7000
            students in the next 10 years.
            <br /> <br/>
            Alvin is next on TxDOT's plan to expand highway 99, projecting 4000
            new home builds during that time. The fact is, Alvin is going to
            need more Gospel-centered churches.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
