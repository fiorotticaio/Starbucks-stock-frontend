import Image, { StaticImageData } from "next/image";

import styles from "../styles/components/Product.module.css";
import api from "@/services/api";


interface ProductProps {
  name: string;
  size: string;
  image: StaticImageData;
  price: number;
}

export default function Product({ name, size, image, price }: ProductProps) {
  
  async function handleClick() {
    await api.get(`/buy/${price.toString()}`)
  }

  return (
    <div className={styles.productContainer}>
      <Image src={image} alt={name} />
      <h4>
        {name} - {size}
      </h4>
      <h2>$ {price.toFixed(2)}</h2>
      <button className={styles.buyButton} onClick={handleClick}>BUY</button>
    </div>
  );
}
