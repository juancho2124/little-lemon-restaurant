import React from "react";
import "../styles/AboutSection.css";
import moreaboutus1 from "../Assets/MarioandAdrianb.jpg";

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h1>More About Us!</h1>
      </div>
      <article className="about-content">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            For generations, our family has cherished the rich, vibrant flavors
            of the Mediterranean, and we're excited to share this passion with
            you. At Little Lemon, we believe in the magic of old-world recipes
            passed down through our family, each dish carrying the warmth of our
            heritage. But we don’t just stop at tradition. Our talented chefs
            add a modern twist to these classic recipes, infusing them with
            contemporary flair and fresh, locally-sourced ingredients. This
            unique blend of old and new ensures a culinary experience like no
            other. Our menu is a mosaic of the Mediterranean, featuring an array
            of dishes from the sun-kissed coasts of Greece to the spice-laden
            markets of Morocco. Whether it's our signature lemon-infused lamb
            tagine, the delicately charred octopus, or our mouth-watering
            baklava, each bite takes you on a journey across the Mediterranean's
            most cherished flavors. The heart of Little Lemon is not just in our
            kitchen, but in the experience we offer. Our cozy, welcoming space
            is designed to feel like a home away from home, where families and
            friends can gather, share a meal, and make memories. From the moment
            you step in, you're part of our family. Join us at Little Lemon,
            where every meal is a celebration of family, flavor, and the fusion
            of time-honored traditions with modern culinary artistry. We're not
            just serving food; we're serving stories, one plate at a time.
          </p>
        </div>
        <div className="about-images">
          <img
            className="about-image1"
            src={moreaboutus1}
            alt="Staff of Little Lemon"
          />
        </div>
      </article>
    </div>
  );
};

export default AboutSection;
