import React from 'react';
import styles from '../styles/pizzalist.module.css'
import Image from "next/image";
import pizza from '../images/featured1.png'

const PizzaCard = () => {
    return (
        <div className={styles.cardMain}>
            <div className={styles.cardImage}>
                <Image src={pizza} height={300} width={300}/>
            </div>
            <div className={styles.cardInfo}>
                <h2 className={styles.cardName}>Farm House</h2>
                <p className={styles.cardDesc}>
                    capsicum olives chilli tomato baby corn
                </p>
                <p className={styles.cardPrice}>$10.00</p>
            </div>
        </div>
    );
};

export default PizzaCard;