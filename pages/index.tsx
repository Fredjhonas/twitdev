'use client'

// import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import Timeline from "components/Timeline";
import PrivateRoute from "components/PrivateRoute";
import data from '../timelines.json'

const Home = () => {
  const [timeLine, setTimeline] = useState(data.timeLines);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/statuses/home_timeline")
  //     .then((res) => res.json())
  //     .then(setTimeline);
  // }, []);

  return <Timeline timeLines={timeLine} />;
};

export default PrivateRoute(Home);
