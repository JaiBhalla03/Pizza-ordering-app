import Image from "next/image";
import styles from "../styles/Featured.module.css"


const ImageContainer = ({image, heading, description}) => {
    return (
        <div className={styles.imageMain}>
            <div>
                <h1>
                    {heading}
                </h1>
                <p>
                    {description}
                </p>
            </div>
            <Image src={image} width={400} height={400}/>
        </div>
    );
};

export default ImageContainer;