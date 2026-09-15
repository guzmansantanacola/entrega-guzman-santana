import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const {
    cart,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const navigate = useNavigate()

  if (!cart.length)
    return (
      <section className={styles.empty}>
        <span aria-hidden="true">Bag</span>
        <h1>Tu carrito está vacío</h1>
        <p>Sumá productos y aparecerán acá.</p>
        <Link to="/">Explorar productos</Link>
      </section>
    );
  return (
    <section className={styles.page}>
      <div className={styles.heading}>
        <div>
          <span>Tu selección</span>
          <h1>Carrito de compras</h1>
        </div>
        <button onClick={clearCart}>Vaciar carrito</button>
      </div>
      <div className={styles.layout}>
        <div className={styles.items}>
          {cart.map((item) => (
            <article key={item.id} className={styles.item}>
              <img src={item.thumbnail} alt={item.title} />
              <div className={styles.info}>
                <Link to={`/productos/${item.id}`}>{item.title}</Link>
                <span>{item.brand}</span>
                <button onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </div>
              <div className={styles.quantity}>
                <button
                  aria-label="Restar uno"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  aria-label="Sumar uno"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <strong>US$ {(item.price * item.quantity).toFixed(2)}</strong>
            </article>
          ))}
        </div>
        <aside className={styles.summary}>
          <h2>Resumen de compra</h2>
          <div>
            <span>Productos ({totalItems})</span>
            <span>US$ {totalPrice.toFixed(2)}</span>
          </div>
          <div>
            <span>Envío</span>
            <strong>Gratis</strong>
          </div>
          <hr />
          <div className={styles.total}>
            <span>Total</span>
            <strong>US$ {totalPrice.toFixed(2)}</strong>
          </div>
          <button onClick={() => navigate("/checkout")}>Continuar compra</button>
          <small>Compra protegida y pagos seguros.</small>
        </aside>
      </div>
    </section>
  );
};
export default Cart;
