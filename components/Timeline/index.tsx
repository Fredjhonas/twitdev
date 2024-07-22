import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import {
  FaRegBookmark,
  FaRegChartBar,
  FaRegComment,
  FaRegHeart,
  FaRetweet,
  FaUpload,
} from 'react-icons/fa';

const Timeline = ({ timeLines }) => {
  return (
    <div className="lg:border-gray-500 lg:border-l-2 lg:border-r-2">
      {timeLines.length > 0 &&
        timeLines.map((timeLine: any, index: number) => {
          const { avatar, username, message } = timeLine;
          const isLast = index === timeLines.length - 1;
          return (
            <div
              className={`sm:p-0 lg:p-5 border-gray-500 ${isLast ? 'border-b-0' : 'border-b-2'}`}
              key={index}
            >
              <div className="flex items-start my-4">
                <Image
                  src={avatar}
                  layout="fixed"
                  height={100}
                  width={100}
                  className="rounded-full"
                  alt="avatar"
                />
                <span className="mt-2">@{username}</span>
              </div>
              <div className="mt-2">
                <p className="p-5">{message}</p>
                <div className="flex flex-wrap justify-between items-center my-4">
                  <div className="flex gap-5">
                    <Button size="sm" placeholder="comment" variant="text">
                      <FaRegComment size={20} />
                    </Button>
                    <Button size="sm" placeholder="retweet" variant="text">
                      <FaRetweet size={20} />
                    </Button>
                    <Button size="sm" placeholder="like" variant="text">
                      <FaRegHeart size={20} />
                    </Button>
                    <Button size="sm" placeholder="chart" variant="text">
                      <FaRegChartBar size={20} />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" placeholder="bookmark" variant="text">
                      <FaRegBookmark size={20} />
                    </Button>
                    <Button size="sm" placeholder="upload" variant="text">
                      <FaUpload size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Timeline;
