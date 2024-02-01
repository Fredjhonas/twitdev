import Image from "next/image";
import { Card } from "@material-tailwind/react";

const Timeline = ({ timeLines }) => {

  return (
    <div className="lg:p-16 md:p-16">
      <Card className="p-10 shadow-2xl" placeholder={"Timeline"}>
        {timeLines.length > 0 &&
          timeLines.map((timeLine: any, index: number) => {
            const { avatar, username, message } = timeLine;
            return (
              <div className="flex pb-16" key={index}>
                <div>
                  <Image
                    src={avatar}
                    layout="fixed"
                    height={45}
                    width={55}
                    className="rounded-full"
                    alt="avatar"
                  />
                </div>
                <div>
                  <strong>{username}</strong>
                  <p>{message}</p>
                </div>
              </div>
            );
          })}
      </Card>
    </div>
  );
};

export default Timeline;
