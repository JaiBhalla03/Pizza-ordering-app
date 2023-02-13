import React from 'react';
import styles from '../styles/NavBar.module.css'
import {IoCallOutline} from "react-icons/io5";
import {AiOutlineShoppingCart} from "react-icons/ai";
import Image from "next/image";
import Logo from '../images/logo.png'

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <IoCallOutline size={35}/>
                </div>
                <div>
                    <div className={styles.texts}>
                        ORDER NOW!
                    </div>
                    <div className={styles.text}>
                        941 548 347
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        Homepage
                    </li>
                    <li className={styles.listItem}>
                        Products
                    </li>
                    <li className={styles.listItem}>
                        Menu
                    </li>
                    <Image src={Logo} height={60} width={170} alt={'logo'} className={styles.logo}/>
                    <li className={styles.listItem}>
                        Events
                    </li>
                    <li className={styles.listItem}>
                        Blog
                    </li>
                    <li className={styles.listItem}>
                        Contacts
                    </li>
                </ul>
            </div>
            <div className={styles.item} id={styles.cartButton}>
                    <div>
                        <AiOutlineShoppingCart size={45}/>
                    </div>
                    <div className={styles.counter}>
                        2
                    </div>
            </div>
        </div>
    );
};

export default NavBar;