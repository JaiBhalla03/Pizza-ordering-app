import React, { useState } from 'react';
import styles from '../styles/ContactUs.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ContactUs() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            const response = await axios.post('/api/messages', data);
            console.log(response.data);
            setIsSubmitting(false);
            reset();
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.container} id={'contact'}>
            <h2 className={styles.title}>Contact Us</h2>
            <div className={styles.inner_container}>
                <div className={styles.contact}>
                    <div className={styles.info}>
                        <div className={styles.icon}>
                            <FaPhone />
                        </div>
                        <p>Call us at <a className={styles.link} href="tel:+123456789">9415483472</a></p>

                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.info}>
                        <div className={styles.icon}>
                            <FaEnvelope />
                        </div>
                        <p>Email us at <a className={styles.link} href="mailto:info@pizzashop.com">jaibhalla35@gmail.com</a></p>
                    </div>
                    <hr className={styles.hr}/>
                    <div className={styles.info}>
                        <div className={styles.icon}>
                            <FaMapMarkerAlt />
                        </div>
                        <p>33/2A, Officer's Line,
                            Near Thirumala Theatre,
                            Vellore Cantonment,
                            Vellore - 632001
                            Tamil Nadu, India.</p>
                    </div>
                    <hr className={styles.hr}/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input placeholder={'Enter your name'} className={styles.input} type="text" id="name" {...register('name', { required: true })} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input placeholder={'Enter your email'} className={styles.input} type="email" id="email" {...register('email', { required: true })} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="message">Message</label>
                        <textarea placeholder={'Send your reviews or any queries if you have'} className={styles.textarea} id="message" {...register('message', { required: true })} />
                    </div>
                    <div className={styles.button_container}>
                        <button className={styles.submit_button} type="submit" disabled={isSubmitting}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
