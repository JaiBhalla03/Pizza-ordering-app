import React from 'react';
import styles from '../styles/pizzalist.module.css'
import Image from "next/image";
import pizza1 from '../public/img/pizza.png'
import Link from 'next/link'

const PizzaCard = ({pizza}) => {
    console.log(pizza.img)
    return (
        <div className={styles.cardMain}>
            <div className={styles.cardImage}>
                <Link href={`/product/${pizza._id}`}>
                    <Image className={styles.image} src={pizza.img} height={370} width={370}/>
                </Link>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.text}>
                    <h2 className={styles.cardName}>{pizza.title}</h2>
                    <p className={styles.cardDesc}>
                        {pizza.desc}
                    </p>
                </div>
                <p className={styles.cardPrice}>{pizza.prices[0]}</p>
            </div>
        </div>
    );
};

export default PizzaCard;