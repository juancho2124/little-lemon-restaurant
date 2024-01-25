import React from "react";
import "../styles/Testimonials.css";
import testimonial1 from "../Assets/testimonial1.jpg";
import testimonial2 from "../Assets/testimonial2.jpg";
import testimonial3 from "../Assets/testimonial3.jpg";
import testimonial4 from "../Assets/testimonial4.jpg";

const Testimonials = () => {
  const testimonialCards = [
    {
      image: testimonial1,
      name: "Jessica Parker",
      review:
        "A hidden gem! Little Lemon offers a cozy atmosphere that instantly makes you feel at home. The lemon chicken is a must-try perfectly cooked with a zesty twist. And don't skip on their lemon tart; it's divine. Service is always friendly and prompt. A definite go-to spot for a casual yet delicious meal.",
    },
    {
      image: testimonial2,
      name: "Brian Torres",
      review:
        "Just love the brunch at Little Lemon! The lemon pancakes with blueberry compote are out of this world. They have a great selection of herbal teas that complement the meal perfectly. The place gets busy, so arriving early is a good idea. A lovely spot for a weekend brunch with friends.",
    },
    {
      image: testimonial3,
      name: "Tyler Adams",
      review:
        "Little Lemon is a fantastic find for veggie lovers! Their lemon roasted vegetable platter was bursting with flavor, and the lemon basil risotto was creamy and satisfying. The staff were welcoming and attentive, making our family dinner extra special. A great place for healthy, flavorful options.",
    },
    {
      image: testimonial4,
      name: "Ana Smith",
      review:
        "Dined at Little Lemon last night and it was a delightful experience! The lemon-infused pasta was a standout, offering a unique and refreshing taste. The ambiance is quaint and charming, ideal for a date night. Prices are reasonable, and the portions are generous. Will definitely be returning!",
    },
  ];

  return (
    <div className="testimonial-container">
      <h1>Testimonials</h1>
      <div className="testimonials-card-container">
        {testimonialCards.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-content">
              <h2>{testimonial.name}</h2>
              <p>{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
