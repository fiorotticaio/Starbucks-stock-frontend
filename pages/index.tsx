import styles from "@/styles/pages/Home.module.css";

import Header from "@/components/Header";
import Product from "@/components/Product";

import mediumCupImg from "@/public/mediumCup.png";
import largeCupImg from "@/public/largeCup.png";
import { useEffect, useState } from "react";
import api from "@/services/api";

export default function Home() {

  const [ mediumPrice, setMediumPrice ] = useState<number>(0);
  const [ largePrice, setLargePrice ] = useState<number>(0);

  async function fetchKafka() {
    const response = await api.get('/price/all')
    console.log(response.data)
    
    if (response.data) {
      setMediumPrice(parseFloat(response.data))
      setLargePrice(parseFloat(response.data))
    }
  }

  useEffect(()=>{
    setInterval(fetchKafka, 1000)
  },[])

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.banner} />
      <div className={styles.content}>
        <section className={styles.contentTitle}>
          <h1 onClick={fetchKafka}>SHOP</h1>
          <h5>
            From the beginning, starbucks set out to be a different kind of
            company. One that not only celebrated coffee but also connection.
            We&apos;re a neighborhood gathering place, a part of your daily
            routine. Get to know us and you&apos;ll see: we are so much more
            than what we brew.
          </h5>
        </section>
        <section className={styles.contentProducts}>
          <Product
            image={mediumCupImg}
            price={mediumPrice}
            name="Medium Cup"
            size="250ml"
          />
          <Product
            image={largeCupImg}
            price={largePrice}
            name="Large Cup"
            size="400ml"
          />
        </section>
      </div>
    </div>
  );
}
