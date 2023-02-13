import React, {useState} from 'react';
import styles from '../../styles/Product.module.css'
import img from '../../images/featured1.png'
import Image from "next/image";
import {FaPizzaSlice} from "react-icons/all";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Product = () => {
    const [price, setPrice] = useState(0);
    const pizza = {
        id: 1,
        img: img,
        name: "Farm house",
        price: [10.0, 11.0, 12.0],
        desc: "lorem ipsun dgs bbdfbd fsbdfb dfbfsb bdsb" +
            " fdbsb psun dgs bbdfbd fsbdfb dfbfsb bdsb fdbsb" +
            " psun dgs bbdfbd fsbdfb dfbfsb bdsb fdbsb psun dgs" +
            " bbdfbd fsbdfb dfbfsb bdsb fdbsb psun dgs bbdfbd f" +
            "sbdfb dfbfsb bdsb fdbsb psun dgs bbdfbd fsbdfb dfbfs" +
            "b bdsb fdbsb"
    }
    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <Image src={pizza.img} width={500} height={500}/>
            </div>
            <div className={styles.containerRight}>
                <h1 className={styles.pizzaName}>{pizza.name}</h1>
                <p className={styles.pizzaPrice}>$ {pizza.price[price]}</p>
                <p className={styles.pizzadesc}>
                    {pizza.desc}
                </p>
                <h3 className={styles.pizzaChoose}>
                    Choose the size1
                </h3>
                <ul className={styles.pizzaList}>
                    <li className={styles.pizzaListItem} onClick={()=>setPrice(0)}>
                        <FaPizzaSlice size={25}/>
                        <div className={styles.itemLabel}>
                            Small
                        </div>
                    </li>
                    <li className={styles.pizzaListItem} onClick={()=>setPrice(1)}>
                        <FaPizzaSlice size={35}/>
                        <div className={styles.itemLabel}>
                            Medium
                        </div>
                    </li>
                    <li className={styles.pizzaListItem} onClick={()=>setPrice(2)}>
                        <FaPizzaSlice size={45}/>
                        <div className={styles.itemLabel}>
                            Large
                        </div>
                    </li>
                </ul>
                <h3 className={styles.pizzaChoose}>
                    Choose the additional ingredients
                </h3>
                <ul className={styles.pizzaListExtra}>
                    <input id={'double'} type={'checkbox'}/>
                    <label for={'double'}>Double Ingredient</label>
                    <input id={'extra'} type={'checkbox'}/>
                    <label htmlFor={'extra'}>Extra Cheese</label>
                    <input id={'spicy'} type={'checkbox'}/>
                    <label htmlFor={'spicy'}>Spicy Sauce</label>
                    <input id={'garlic'} type={'checkbox'}/>
                    <label htmlFor={'garlic'}>Garlic Sauce</label>
                </ul>
                <div style={{'display':'flex', 'justifyContent':'space-between', 'marginTop': '10px'}}>
                    <input type={'number'} defaultValue={1} className={styles.quantity}/>
                    <button className={styles.pizzaAdd}><div>Add To Card</div> <AiOutlineShoppingCart size={30}/></button>
                </div>

            </div>
        </div>
    );
};

    export default Product;