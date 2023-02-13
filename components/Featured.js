import styles from '../styles/Featured.module.css'
import Image from "next/image";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import ImageContainer from "@/components/ImageContainer";
import pizza1 from '../images/featured1.png'
import pizza2 from '../images/featured2.png'

const Featured = () => {
    const images = [
        {
            src: pizza1,
            heading: 'Hot & Spicy Pizza',
            des: 'Buy 2 get 1 free'
        },
        {
            src: pizza2,
            heading: 'Hot & Spicy Pizza',
            des: 'Free home delivery'
        }
    ]
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer1}>
                <AiOutlineArrowLeft size={45}/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    {
                        images.map((img, i)=>(
                            <ImageContainer
                                image={img.src}
                                heading={img.heading}
                                description={img.des}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={styles.arrowContainer2}>
                <AiOutlineArrowRight size={45}/>
            </div>
        </div>
    );
};

export default Featured;