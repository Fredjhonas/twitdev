// import styles from "./Home.module.css";
import userHandler from "../utils/userHandler";
import { useAppSelector } from "../store/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { makeSelectAuth } from "./selectors";
import { useEffect, useState } from "react";
import Timeline from "../components/Timeline";
import Login from "../components/Login";

const stateSelector = createSelector(makeSelectAuth, (user) => ({
  user,
}));

const Home = () => {
  const isLogged = userHandler.isLogged();
  const { user } = useAppSelector(stateSelector);
  const [logged, setLogged] = useState(isLogged);

  const handleLogin = () => {
    if (user !== null || isLogged) {
      setLogged(true);
      user !== null ? userHandler.notifyLogin(user) : null;
    } else {
      setLogged(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, [user]);

  return logged ? <Timeline /> : <Login />;
};

export default Home;
