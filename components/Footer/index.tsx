import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer + " bg-sky-500 h-1/5"}>
      Proveido por &nbsp; <span className="font-bold">TWITDEV</span>
    </footer>
  );
};

export default Footer;
