import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {


    return (
        <main className="landingPage">
            <div className="hero">
                <div className="heroContent">
                    <h1>Foodie Haven</h1>
                    <p>Your gateway to delicious culinary experiences.</p>
                    <button className="orderButton" onClick={'/myorder'}>Order Now</button>
                </div>
            </div>

            <section id="services" className="services">
                <h2>Our Services</h2>
                <div className="servicesList">
                    <div className="serviceCard">
                        <h3>Fast Door Delivery</h3>
                        <p>Enjoy your favorite meals delivered quickly and securely right to your doorstep.</p>
                    </div>
                    <div className="serviceCard">
                        <h3>Meal Prepping</h3>
                        <p>Convenient meal prep options designed for your busy lifestyle—fresh, healthy, and ready to go.</p>
                    </div>
                    <div className="serviceCard">
                        <h3>Customized Catering</h3>
                        <p>Tailored catering services for your events, ensuring delicious food delivered with care and precision.</p>
                    </div>
                </div>
            </section>


            <section id="about" className="about">
                <h2>About Us</h2>
                <p>
                    At Foodie Haven, we believe that food is an experience to be savored. Our passionate team of chefs and culinary enthusiasts is dedicated to bringing you flavors from around the world, ensuring every bite is a delight.
                </p>
            </section>


        </main>
    );
};

export default LandingPage;
