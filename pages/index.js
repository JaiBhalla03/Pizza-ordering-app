import React, { useEffect, useState } from "react";
import axios from "axios";
import PizzaList from "@/components/PizzaList";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";

const Home = () => {
    const [pizzaList, setPizzaList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/products");
                setPizzaList(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {/* Render your components with fetched data */}
            <Hero />
            <Services />
            <PizzaList pizzaList={pizzaList} />
            <ContactUs />
        </>
    );
};

export default Home;
