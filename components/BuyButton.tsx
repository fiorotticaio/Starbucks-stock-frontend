import styles from "@/styles/components/BuyButton.module.css";

export default function BuyButton() {
  function handleClick() {
    console.log("clicked");
    fetch("http://localhost:3333/send-message");
  }

  return (
    <button onClick={() => handleClick()} className={styles.buyButton}>
      BUY
    </button>
  );
}
