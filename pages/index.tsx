// import styles from "./Home.module.css";
import Timeline from "components/Timeline";
import PrivateRoute from "components/PrivateRoute";

const Home = () => {
  return <Timeline />;
};

export default PrivateRoute(Home);
