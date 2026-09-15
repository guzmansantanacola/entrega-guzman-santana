import { useState } from "react";
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const increase = () => {
    if (quantity >= stock) {
      setMessage(`Solo hay ${stock} unidades disponibles.`);
      return;
    }
    setMessage("");
    setQuantity((current) => current + 1);
  };

  const decrease = () => {
    setMessage("");
    setQuantity((current) => Math.max(1, current - 1));
  };

  const handleAdd = () => {
    if (!stock || stock < 1) {
      setMessage("Este producto no está disponible.");
      return;
    }
    onAdd(quantity);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls} aria-label="Seleccionar cantidad">
        <button type="button" onClick={decrease} aria-label="Restar uno">
          −
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={increase} aria-label="Sumar uno">
          +
        </button>
      </div>
      <button
        type="button"
        className={styles.add}
        onClick={handleAdd}
        disabled={!stock}
      >
        Agregar a mi bolsa
      </button>
      {message && <small className={styles.message}>{message}</small>}
    </div>
  );
};

export default ItemCount;
