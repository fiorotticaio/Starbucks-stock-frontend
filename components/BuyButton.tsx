import styles from "@/styles/components/BuyButton.module.css";

export default function BuyButton() {
  async function handleClick() {
    fetch("http://localhost:3333/send-message");
  }

  return (
    <button onClick={() => handleClick()} className={styles.buyButton}>
      BUY
    </button>
  );
}
