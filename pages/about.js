import React from 'react';
import styles from '../styles/About.module.css';
import Image from "next/image";
import about from '../img/about.png'

const About = () => {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <h2 className={styles.title}>About Us</h2>
                <p>Our restaurant was founded in 1995 by a passionate pizza lover who dreamed of
                    creating the perfect slice. We use only the freshest ingredients in our pizzas,
                    sourced locally whenever possible. Our wood-fired pizza oven is the heart and soul
                    of our kitchen, and it's what gives our pizzas their crispy, smoky flavor. We offer
                    a wide variety of pizza toppings, from classic pepperoni and mushroom to more adventurous
                    options like goat cheese and arugula. Our signature pizza is the "Supreme," loaded with
                    pepperoni, sausage, onions, bell peppers, and mushrooms.

                    We also offer gluten-free and vegan options for our customers with dietary restrictions.
                    Our restaurant has a cozy, casual atmosphere perfect for a family dinner or a night out
                    with friends. We pride ourselves on our excellent customer service and strive to make every
                    visit a memorable one. We have a loyalty program that rewards our regular customers with
                    free pizzas and other perks. Our restaurant is committed to sustainability, and we use
                    eco-friendly packaging and compost our food waste.
                </p>
            </div>
            <div>
                <Image src={about} alt={''} width={500} height={500}/>
            </div>
        </div>
    );
};

export default About;
