import React from "react";

import "../styles/Specials.css";
import greeksalad from "../Assets/greeksalad.jpg";
import lemondessert from "../Assets/lemondessert.jpg";
import bruchetta from "../Assets/bruchetta.jpg";

const Specials = () => {
  const specialMenus = [
    {
      image: greeksalad,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
      order: "Order a delivery",
    },
    {
      image: bruchetta,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
      order: "Order a delivery",
    },
    {
      image: lemondessert,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
      order: "Order a delivery",
    },
  ];

  return (
    <div className="specials-container">
      <div className="menu-container">
        <div className="special-heading">
          <h1>This weeks specials!</h1>
          <button className="btn">Online Menu</button>
        </div>
        <div className="menu">
          <div className="card-container">
            {specialMenus.map((menu, index) => (
              <div key={index} className="menu-card">
                <img src={menu.image} alt={menu.title} />
                <div className="heading-container">
                  <h2>{menu.title}</h2>
                  <h3>{menu.price}</h3>
                </div>
                <p>{menu.description}</p>
                <button className="order-button">{menu.order}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
