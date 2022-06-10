// import styles from './Timeline.module.css'
// import Head from "next/head";
import Image from "next/image";
import Card from "@material-tailwind/react/Card";

const Timeline = ({ timeLines }) => {
  return (
    <section className="lg:p-16 md:p-16">
      <Card className="p-10 shadow-2xl">
        {timeLines.length > 0 &&
          timeLines.map((timeLine: any, index: number) => {
            const { avatar, username, message } = timeLine;
            return (
              <article className="flex pb-16" key={index}>
                <div>
                  <Image
                    src={avatar}
                    layout="fixed"
                    height={45}
                    width={55}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <strong>{username}</strong>
                  <p>{message}</p>
                </div>
              </article>
            );
          })}
      </Card>
    </section>
  );
};

export default Timeline;
