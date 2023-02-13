import React from 'react';
import styles from '../styles/pizzalist.module.css'
import PizzaCard from "@/components/PizzaCard";

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>i
                hye my name is jai bhalla and i am going to turn 20 years this
                i am feeling really depressed i  dont know what to do with my life
                but i know that everything is going to change in my life
                hye my name is jai bhalla and i am going to turn 20 years this
                i am feeling really depressed i  dont know what to do with my life
                but i know that everything is going to change in my life
            </p>
            <div className={styles.wrapper}>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
            </div>
        </div>
    );
};

export default PizzaList;