import React from 'react';
import styles from '../styles/Cart.module.css'
import Image from "next/image";
import img from '../images/featured1.png'

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extra</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imageContainer}>
                                <Image src={img} layout={'fill'} objectFit={'cover'} alt={''}/>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>
                                FarmHouse
                            </span>
                        </td>
                        <td>
                            <span className={styles.extra}>Double ingredient Spicy Sauce</span>
                        </td>
                        <td>
                            <span className={styles.price}>$10</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$20</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imageContainer}>
                                <Image src={img} layout={'fill'} objectFit={'cover'} alt={''}/>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>
                                FarmHouse
                            </span>
                        </td>
                        <td>
                            <span className={styles.extra}>Double ingredient Spicy Sauce</span>
                        </td>
                        <td>
                            <span className={styles.price}>$10</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$20</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2>CART TOTAL</h2>
                    <p><b>Subtotal: </b> $40.00</p>
                    <p><b>Discount: </b> $00.00</p>
                    <p><b>Total: </b> $40.00</p>
                    <button>Check Out!</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;