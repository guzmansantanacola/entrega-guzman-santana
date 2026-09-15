import Products from "../../components/Products/Products";
import { useProducts } from "../../hooks/useProducts";
import styles from "./Home.module.css";

const Home = () => {
  const { products, isLoading, error } = useProducts();

  return (
    <>
      <section className={styles.hero}>
        <div>
          <span className={styles.eyebrow}>
            El ritual empieza acá · belleza seleccionada
          </span>
          <h1>Tu ritual.<br />Tu momento.</h1>
          <p>
            Fórmulas y esenciales elegidos para acompañar cada versión de vos.
          </p>
          <a href="#productos">Ver productos</a>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <span>EDICIÓN 01 / 2026</span>
          <strong>BEAUTY<br />IN BLOOM</strong>
          <small>una selección para florecer</small>
        </div>
      </section>
      <section id="productos" className={styles.catalog}>
        <div className={styles.heading}>
          <div>
            <span>La selección Lumen</span>
            <h2>Encontrá tu próxima obsesión</h2>
          </div>
          <p>Deslizá y descubrí</p>
        </div>
        <Products products={products} isLoading={isLoading} error={error} />
      </section>
    </>
  );
};

export default Home;
