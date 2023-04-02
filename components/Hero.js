import styles from '../styles/Hero.module.css'
import hero from '../img/hero_main.jpg'
import Image from "next/image";
const Hero = ()=>{
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <h1 className={styles.main_text}>Hungry? You are at the right place...</h1>
                <p className={styles.sub_text}>
                    Go ahead, explore our menu and place your order today. We guarantee you'll love every bite of our delicious pizza!
                </p>
                <div style={{paddingRight: 50}}>
                    <a href={'#menu'} className={styles.order_button}>
                        Order Now!
                    </a>
                </div>


            </div>
            <div className={styles.imageContainer}>
                <Image src={hero} alt={'image'} width={550} height={550}/>
            </div>

        </div>
    )
}

export default Hero;