import React from 'react';
import styles from '../styles/NavBar.module.css'
import {AiOutlineShoppingCart} from "react-icons/ai";
import Image from "next/image";
import Logo from '../img/logo.png'
import {BiPhoneCall} from "react-icons/bi";
import {useSelector} from "react-redux";
import Link from "next/link";

const NavBar = () => {
    const quantity = useSelector((state)=>state.cart.quantity)
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <Image src={Logo} height={60} width={170} alt={'logo'} className={styles.logo}/>
            </div>

            <div className={styles.navbar}>
                <div className={styles.item}>
                    <ul className={styles.list}>
                        <Link href={'/'} className={styles.listItem}>
                            Homepage
                        </Link>
                        <Link href={'/about'} className={styles.listItem}>
                            About Us
                        </Link>
                        <li className={styles.listItem}>
                            <Link  className={styles.links} href={'/#services'}>Services</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link  className={styles.links} href={'/#menu'}>Menu</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link  className={styles.links} href={'/#contact'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <Link href={"/cart"} style={{'color': 'white'}} className={styles.cart_container} passHref>
                    <div className={styles.item} id={styles.cartButton}>
                        <div>
                            <AiOutlineShoppingCart size={45}/>
                        </div>
                        <div className={styles.counter}>
                            {quantity}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;