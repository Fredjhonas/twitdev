import styles from "./AppLayout.module.css";
import Head from "next/head";
import Footer from "../Footer";

const AppLayout = ({ children, title, name, content }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={name} content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
