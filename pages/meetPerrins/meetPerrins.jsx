import React from "react";
import styles from "./meetPerrins.module.css"
// import "@/styles/globals.css";

function MeetPerrins() {
  return (
    <div className="centerContainer">
      <div className="background">
        {/* Header */}
        <h1 className="title">
          <i className="fa-solid fa-user"></i> Meet the Perrins
        </h1>

        {/* Content Section 1 */}
        <div className="contentRow">
          {/* Round Image */}
          <img
            src="/images/Cperrin.png"
            alt="Cary Perrin"
            className="profileImage borderedImage"
          />

          {/* Text */}
          <p className="description">
            <b>Cary Perrin</b>, the current President of the Alvin-Manvel Area
            Chamber of Commerce, has a profound dedication to faith and
            community. Cary has pastored and been on staff at churches in
            Missouri, Pearland and Alvin. After experiencing significant
            personal and community tragedies between 2016 and 2018, Cary found
            healing at Heights Baptist Church. Inspired by the support he
            received, he felt called to start Living Oaks Church in southern
            Alvin, TX, to help others find real hope for healing through Jesus.
            Cary's leadership is marked by authenticity, compassion, and a
            commitment to serving those with real hurts.
          </p>
        </div>

        {/* Content Section 2 */}
        <div className="contentRow">
          {/* Round Image */}
          <img
            src="/images/Dperrin.png"
            alt="Danielle Perrin"
            className="profileImage borderedImage"
          />

          {/* Text */}
          <p className="description">
            Danielle Perrin, currently a professional trauma counselor for the
            Brazoria County Alliance for Children, brings a deep empathy and
            professional expertise to the church plant. Her personal and
            professional experience equips her to support the development of
            mental and emotional health-focused perspectives to minister to the
            church and community. Danielle's dedication to helping others
            through leadership, discernment, and teaching is integral to the
            mission of Living Oaks Church.
          </p>
        </div>

        <h1 className="title">
          <i className="fa-solid fa-users"></i> Answering the Call
        </h1>

        {/* Content Section 3 */}
        <div className="contentRowSquare">
          {/* Square Image */}
          <img
            src="/images/Fperrin.png"
            alt="Family Perrin"

            className="profileImageSquare borderedImage"
            
          />


          {/* Text */}
          <p className="description">
            Together, Cary and Danielle are starting Living Oaks Church (LOC) to
            address the spiritual, emotional and practical needs of the
            community. Their heart, "We are real people with real hurts who want
            to help real people with real hurts find real hope in Jesus", and
            their drive to help others "Grow Deep" reflect their commitment to
            creating a supportive and healing church environment. Their
            leadership promises to make a lasting positive impact in Southern
            Alvin as it continues to be a fast growing population in the Greater
            Houston Area.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MeetPerrins;
