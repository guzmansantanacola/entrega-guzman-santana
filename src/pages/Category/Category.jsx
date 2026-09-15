import { Link, useParams } from "react-router-dom";
import Products from "../../components/Products/Products";
import { useProducts } from "../../hooks/useProducts";
import styles from "./Category.module.css";

const Category = () => {
  const { category } = useParams();
  const { products, isLoading, error } = useProducts();
  const categoryProducts = products.filter((product) => product.category === category);
  const title = category?.replaceAll("-", " ") || "Categoría";

  return (
    <section className={styles.page}>
      <div className={styles.heading}>
        <span>Selección Lumen</span>
        <h1>{title}</h1>
        <p>Explorá productos elegidos para acompañar tu ritual.</p>
      </div>
      <Products products={categoryProducts} isLoading={isLoading} error={error} />
      {!isLoading && !error && categoryProducts.length === 0 && (
        <Link className={styles.back} to="/">Volver a toda la colección</Link>
      )}
    </section>
  );
};

export default Category;
