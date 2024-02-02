import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import {
  FaRegHeart,
  FaRegComment,
  FaRetweet,
  FaRegChartBar,
  FaRegBookmark,
  FaUpload,
} from 'react-icons/fa';

const Timeline = ({ timeLines }) => {
  return (
    <div className="border-gray-500 border-l-2 border-r-2">
      {timeLines.length > 0 &&
        timeLines.map((timeLine: any, index: number) => {
          const { avatar, username, message } = timeLine;
          const isLast = index === timeLines.length - 1;
          return (
            <div
              className={`flex p-5 border-gray-500 ${isLast ? 'border-b-0' : 'border-b-2'}`}
              key={index}
            >
              <div>
                <Image
                  src={avatar}
                  layout="fixed"
                  height={200}
                  width={200}
                  className="rounded-full"
                  alt="avatar"
                />
              </div>
              <div>
                <span>{username}</span>
                <p>{message}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-10">
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
