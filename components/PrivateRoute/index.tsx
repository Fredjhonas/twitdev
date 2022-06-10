/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import useAuth from "customHooks/useAuth";
import Login from "../Login";

const PrivateRoute = (Component: any) => {
  return (props: any) => {
    const signedIn = useAuth();

    if (!signedIn) {
      return <Login />;
    }

    return <Component {...props} />;
  };
};

export default PrivateRoute;
