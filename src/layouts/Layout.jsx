import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./Layout.module.css";

const Layout = () => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.identity}>
          <strong className={styles.logo}><span aria-hidden="true">◒</span> Lumen</strong>
          <p>Belleza esencial para tu ritual diario.</p>
        </div>
        <div className={styles.promise}>
          <span>La belleza, a tu manera</span>
          <strong>Productos seleccionados.<br />Resultados que se sienten.</strong>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div>
          <h2>Explorá</h2>
          <a href="/">Inicio</a>
          <a href="/#productos">Colección</a>
          <a href="/carrito">Mi bolsa</a>
        </div>
        <div>
          <h2>Atención</h2>
          <a href="mailto:hola@lumenbeauty.com">hola@lumenbeauty.com</a>
          <span>Lun. a vie. · 9 a 18 h</span>
          <span>Envíos a todo el país</span>
        </div>
        <div className={styles.trust}>
          <h2>Compra segura</h2>
          <span>✓ Pagos protegidos</span>
          <span>✓ Envío gratis seleccionado</span>
          <span>✓ Soporte cercano</span>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 Lumen Beauty. Todos los derechos reservados.</span>
        <span>Diseñado para tu ritual.</span>
      </div>
    </footer>
  </div>
);
export default Layout;
