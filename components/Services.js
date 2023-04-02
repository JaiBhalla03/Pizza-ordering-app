import styles from '../styles/Services.module.css'
import Service from "@/components/Service";
import service1 from '../img/service1.png'
import service2 from '../img/service2.png'
import service3 from '../img/service3.png'
import service4 from '../img/service4.png'

const Services = ()=>{

    return (
        <div id={'services'} className={styles.main}>
            <h1 className={styles.title}>Services</h1>
            <div className={styles.services_list}>
                <Service image={service1} heading={'Master Chef'} sub={'We have master chef from all over the world'}/>
                <Service image={service2} heading={'Quality Pizza'} sub={'Good rated 5 stars by more than 1000+ customers'}/>
                <Service image={service3} heading={'Online Order'} sub={'Helps you save time as dont have to go the restuarant'}/>
                <Service image={service4} heading={'24/7 service'} sub={'You can call at anytime and we will be available'}/>
            </div>
        </div>
    )
}


export default Services;