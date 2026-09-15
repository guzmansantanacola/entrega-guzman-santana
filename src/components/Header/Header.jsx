import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useProducts } from "../../hooks/useProducts";
import styles from "./Header.module.css";

const Header = () => {
  const { totalItems } = useCart();
  const { products } = useProducts();
  const categories = [...new Set(products.map(({ category }) => category).filter(Boolean))].sort();
  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;
  return (
    <aside className={styles.header}>
      <nav className={styles.nav} aria-label="Navegación principal">
        <NavLink to="/" className={styles.brand}>
          <span aria-hidden="true">◒</span> Lumen
        </NavLink>
        <p className={styles.tagline}>Belleza esencial para tu ritual diario</p>
        <span className={styles.sectionLabel}>Menú principal</span>
        <div className={styles.links}>
          <NavLink to="/" end className={linkClass}>
            <span className={styles.icon} aria-hidden="true">↗</span> Inicio
          </NavLink>
          <NavLink
            to="/carrito"
            className={`${styles.link} ${styles.cart}`}
            aria-label={`Carrito con ${totalItems} productos`}
          >
            <span className={styles.icon} aria-hidden="true">Bag</span> Mi bolsa{" "}
            <span className={styles.badge}>{totalItems}</span>
          </NavLink>
        </div>
        <span className={styles.sectionLabel}>Categorías</span>
        <div className={styles.categoryLinks}>
          {categories.map((category) => (
            <NavLink key={category} to={`/categoria/${encodeURIComponent(category)}`}>
              {category.replaceAll("-", " ")}
            </NavLink>
          ))}
        </div>
        <div className={styles.sidebarBottom}>
          <span className={styles.sectionLabel}>Tu experiencia</span>
          <div className={styles.details}>
            <span><b aria-hidden="true">✓</b> Envíos cuidados</span>
            <span><b aria-hidden="true">✓</b> Compra protegida</span>
          </div>
          <div className={styles.note}>
            <span>DROP 01</span>
            <strong>Elegí algo<br />que te acompañe.</strong>
          </div>
          <small className={styles.copyright}>Lumen / 2026</small>
        </div>
      </nav>
    </aside>
  );
};
export default Header;
