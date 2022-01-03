import styles from "./AppLayout.module.css";
import Footer from "../Footer";
import NavbarComponent from "../Navbar";
import { createSelector } from "@reduxjs/toolkit";
import { makeSelectAuth } from "../../pages/selectors";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import userHandler from "../../utils/userHandler";

const stateSelector = createSelector(makeSelectAuth, (user) => ({
  user,
}));

const AppLayout = ({ children }) => {
  const isLogged = userHandler.isLogged();
  const { user } = useAppSelector(stateSelector);
  const [logged, setLogged] = useState(isLogged);

  useEffect(() => {
    if (user !== null || isLogged) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [user]);

  return (
    <>
      <NavbarComponent isLogged={logged} userData={user} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
