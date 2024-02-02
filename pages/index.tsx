'use client';

// import styles from "./Home.module.css";
import { useState, useEffect } from 'react';
import Timeline from 'components/Timeline';
import PrivateRoute from 'components/PrivateRoute';
import data from '../timelines.json';

const Home = () => {
  const [timeLines, setTimelines] = useState(data.timeLines);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/statuses/home_timeline")
  //     .then((res) => res.json())
  //     .then(setTimeline);
  // }, []);

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <h1 className="text-center mt-2">Home</h1>
      </div>
      <div className="col-span-2">
        <Timeline timeLines={timeLines} />
      </div>
      <div className="col-span-1">
        <h1 className="text-center mt-2">Who to follow</h1>
      </div>
    </div>
  );
};

export default PrivateRoute(Home);
