import React, {useState} from 'react';
import styles from '../../styles/Product.module.css'
import Image from "next/image";
import {FaPizzaSlice} from "react-icons/fa";
import {AiOutlineShoppingCart} from "react-icons/ai";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addProduct} from "@/redux/cartSlice";

const Product = ({pizza}) => {
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(pizza.prices[0]);
    const [extras, setExtras] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const changePrice = (number)=>{
        setSize(size + number)
    }
    const handleSize = (sizeIndex)=>{
        const diff = pizza.prices[sizeIndex] - pizza.prices[price]
        setPrice(sizeIndex);
        changePrice(diff);
    }
    const handleChange = (e, option)=>{
        const checked = e.target.checked;
        if(checked){
            changePrice(option.price)
            setExtras((prev)=>[...prev, option])
        }
        else{
            changePrice(-option.price)
            setExtras(extras.filter((extra)=>extra._id !== option._id))
        }
    }
    const dispatch = useDispatch()
    console.log(size)
    const handleClick = ()=>{
        dispatch(addProduct({...pizza, extras, size, quantity}))
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <Image className={styles.image} src={pizza.img} width={500} height={500}/>
            </div>
            <div className={styles.containerRight}>
                <h1 className={styles.pizzaName}>{pizza.title}</h1>
                <p className={styles.pizzaPrice}>$ {size}</p>
                <p className={styles.pizzadesc}>
                    {pizza.desc}
                </p>
                <h3 className={styles.pizzaChoose}>
                    Choose the size1
                </h3>
                <ul className={styles.pizzaList}>
                    <li className={styles.pizzaListItem} onClick={()=>handleSize(0)}>
                        <FaPizzaSlice size={25}/>
                        <div className={styles.itemLabel}>
                            Small
                        </div>
                    </li>
                    <li className={styles.pizzaListItem} onClick={()=>handleSize(1)}>
                        <FaPizzaSlice size={35}/>
                        <div className={styles.itemLabel}>
                            Medium
                        </div>
                    </li>
                    <li className={styles.pizzaListItem} onClick={()=>handleSize(2)}>
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
                    {
                        pizza.extraOptions.map((option)=>(
                            <>
                                <input
                                    id={option.text}
                                    name={option.text}
                                    type={'checkbox'}
                                    onChange={(e)=>handleChange(e, option)}
                                />
                                <label htmlFor={'double'}>{option.text}</label>
                            </>
                        ))
                    }
                </ul>
                <div style={{'display':'flex', 'justifyContent':'space-between', 'marginTop': '10px'}}>
                    <input onChange={(e)=>setQuantity(e.target.value)} type={'number'} defaultValue={1} className={styles.quantity}/>
                    <button
                        onClick={handleClick}
                        className={styles.pizzaAdd}><div>Add To Card</div> <AiOutlineShoppingCart size={30}/></button>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async({params})=>{
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
        props: {
            pizza: res.data,
        }
    }
}

    export default Product;

