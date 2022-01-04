import { createSelector } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { setUser } from "../pages/authSlice";
import { makeSelectAuth } from "../pages/selectors";
import { store } from "../store";
import { useAppSelector } from "../store/hooks";
import userHandler from "../utils/userHandler";

const stateSelector = createSelector(makeSelectAuth, (user) => ({
  user,
}));

const useAuth = () => {
  const isLogged = userHandler.isLogged();
  const { user } = useAppSelector(stateSelector);
  const [logged, setLogged] = useState(isLogged);

  const handleLogin = () => {
    if (user !== null || isLogged) {
      setLogged(true);
      const userLocal = userHandler.getUser();
      user !== null
        ? userHandler.notifyLogin(user)
        : store.dispatch(setUser(userLocal));
    } else {
      setLogged(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, [user]);

  return logged;
};

export default useAuth;
