import React from 'react';
import styles from '../styles/pizzalist.module.css'
import PizzaCard from "@/components/PizzaCard";

const PizzaList = ({pizzaList}) => {
    console.log(pizzaList)
    return (
        <div className={styles.container} id={'menu'}>
            <h1 className={styles.title}>Menu</h1>
            <div className={styles.wrapper}>
                {
                    pizzaList?.map((pizza) => (
                        <PizzaCard key={pizza._id} pizza={pizza}/>
                    ))
                }
            </div>
        </div>
    );
};

export default PizzaList;