import React from 'react';
import styles from '../../styles/Order.module.css'
import {MdDeliveryDining, MdOutlinePayments} from "react-icons/md";
import {GiCampCookingPot} from "react-icons/gi";
import {AiOutlineCheckCircle, AiOutlineDeliveredProcedure} from "react-icons/ai";

const Order = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>122425435656</td>
                        <td>Jai Bhalla</td>
                        <td>Rohini Apartment</td>
                        <td>$30.00</td>
                    </tr>
                </table>
                <ul className={styles.process}>
                   <li className={styles.processItem}>
                       <MdOutlinePayments size={40} className={styles.icon}/>
                       <p>Payment</p>
                       <div className={styles.check}><AiOutlineCheckCircle size={30} className={styles.icon} fill={'green'}/></div>
                   </li>
                    <li className={styles.processItem}>
                        <GiCampCookingPot size={40} className={styles.icon}/>
                        <p>Preparing</p>
                        <div className={styles.check}><AiOutlineCheckCircle size={30} className={styles.icon} fill={'green'}/></div>
                    </li>
                    <li className={styles.processItem}>
                        <MdDeliveryDining size={40} className={styles.icon}/>
                        <p>On the way</p>
                        <div className={styles.check}><AiOutlineCheckCircle size={30} className={styles.icon} fill={'green'}/></div>
                    </li>
                    <li className={styles.processItem}>
                        <AiOutlineDeliveredProcedure size={40} className={styles.icon}/>
                        <p>Delivered</p>
                        <div className={styles.check}><AiOutlineCheckCircle size={30} className={styles.icon} fill={'green'}/></div>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2>CART TOTAL</h2>
                    <p><b>Subtotal: </b> $40.00</p>
                    <p><b>Discount: </b> $00.00</p>
                    <p><b>Total: </b> $40.00</p>
                    <button disabled={true}>Paid</button>
                </div>
            </div>
        </div>
    );
};

export default Order;