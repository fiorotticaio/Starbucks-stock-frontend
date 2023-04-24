import styles from "@/styles/pages/Home.module.css";

import Header from "@/components/Header";
import Product from "@/components/Product";

import mediumCupImg from "@/public/mediumCup.png";
import largeCupImg from "@/public/largeCup.png";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.banner} />
      <div className={styles.content}>
        <section className={styles.contentTitle}>
          <h1>SHOP</h1>
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
            price={2.5}
            name="Medium Cup"
            size="250ml"
          />
          <Product
            image={largeCupImg}
            price={4.5}
            name="Large Cup"
            size="400ml"
          />
        </section>
      </div>
    </div>
  );
}
