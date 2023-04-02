import service_image from '../img/service1.png'
import Image from "next/image";
import styles from '../styles/Service.module.css'
const Service = ({image, heading, sub})=>{
    return (
        <div className={styles.card}>
            <div className={styles.image_container}>
                <Image className={styles.image} src={image} alt={''} width={250}/>
            </div>
            <div className={styles.text}>
                <h2 className={styles.heading}>{heading}</h2>
                <p className={styles.sub_heading}>
                    {sub}
                </p>
            </div>
        </div>
    )
}

export default Service;