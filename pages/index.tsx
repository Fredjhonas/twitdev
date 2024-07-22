'use client';

// import styles from "./Home.module.css";
import PrivateRoute from 'components/PrivateRoute';
import ProgressBar from 'components/ProgressBar';
import Timeline from 'components/Timeline';
import { useEffect, useState } from 'react';
import data from '../timelines.json';

const Home = () => {
  const [timeLines, setTimelines] = useState(data.timeLines);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/statuses/home_timeline")
  //     .then((res) => res.json())
  //     .then(setTimeline);
  // }, []);

  return (
    <PrivateRoute>
      {loading ? (
        <div className="flex w-1/2 flex-col gap-4">
          <ProgressBar loading={loading} />
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-1">
          <div className="col-span-1 hidden lg:block">
            <h1 className="text-center mt-2">Home</h1>
          </div>
          <div className="lg:col-span-2">
            <Timeline timeLines={timeLines} />
          </div>
          <div className="col-span-1 hidden lg:block">
            <h1 className="text-center mt-2">Who to follow</h1>
          </div>
        </div>
      )}
    </PrivateRoute>
  );
};

export default Home;
