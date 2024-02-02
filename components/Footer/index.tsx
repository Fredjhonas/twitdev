import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer + ' bg-sky-500 h-1/5'}>
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-black">Twitdev &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
