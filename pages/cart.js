import React, {useState} from 'react';
import styles from '../styles/Cart.module.css'
import Image from "next/image";
import {useSelector, useDispatch} from "react-redux";
import Head from "next/head";
import axios from "axios";
import {reset} from "@/redux/cartSlice";
import OrderDetail from "@/components/OrderDetail";
import {useRouter} from "next/router";



const Cart = () => {
    const [open, setOpen]=useState(false)
    const [cash, setCash] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter()
    const createOrder = async (data) => {
        try {
            const res = await axios.post("http://localhost:3000/api/orders", data);
            if (res.status === 201) {
                dispatch(reset());
                await router.push(`/`);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const cart = useSelector(state=>state.cart)
    return (<>
            <Head>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
                <title></title>
            </Head>
            <div className={styles.container}>
                <div className={styles.left}>
                    <table className={styles.table}>
                        <tr className={styles.tr}>
                            <th className={styles.table_heading}>Product</th>
                            <th className={styles.table_heading}>Name</th>
                            <th className={styles.table_heading}>Extra</th>
                            <th className={styles.table_heading}>Price</th>
                            <th className={styles.table_heading}>Quantity</th>
                            <th className={styles.table_heading}>Total</th>
                        </tr>
                        {
                            cart.products.map(product=>(


                                <tr className={styles.tr} key={product._id}>
                                    <td className={styles.table_data}>
                                        <Image className={styles.image} src={product.img} width={100} height={100} alt={''}/>
                                    </td>
                                    <td className={styles.table_data}>
                            <span className={styles.name}>
                                {product.title}
                            </span>
                                    </td>
                                    <td className={styles.table_data}>
                            <span className={styles.name}>{
                                product.extras.map((extra)=>(
                                    <span key={extra._id}>{extra.text}, </span>
                                ))
                            }</span>
                                    </td>
                                    <td className={styles.table_data}>
                                        <span className={styles.price}>${product.size}</span>
                                    </td>
                                    <td className={styles.table_data}>
                                        <span className={styles.quantity}>{product.quantity}</span>
                                    </td>
                                    <td className={styles.table_data}>
                                        <span className={styles.total}>${product.size*product.quantity}</span>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <h2>CART TOTAL</h2>
                        <b>Subtotal: </b><p> ${cart.total}</p>
                        <b>Discount: </b><p> $00.00</p>
                        <b>Total: </b><p> ${cart.total}</p>
                        <button className={styles.buu} onClick={()=>setCash(true)}>Order!</button>
                    </div>
                </div>

            </div>
            {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </>

    );
};

export default Cart;