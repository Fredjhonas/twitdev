import styles from './AppLayout.module.css';
import Footer from '../Footer';
import NavbarComponent from '../Navbar';
import useAuth from 'customHooks/useAuth';

const AppLayout = ({ children }) => {
  const logged = useAuth();
  return (
    <div className={`${styles.layout} 2xl:container`}>
      <NavbarComponent isLogged={logged} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
