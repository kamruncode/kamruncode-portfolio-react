import "./me.css";
import MyExEd from "../../assets/ExEdContainer";
import { ImClock, ImCalendar, ImLocation } from "react-icons/im";
import WorkData from "../../Data/WorkExp.json";
import EduData from "../../Data/Education.json";
import Logos from "../../Data/Logos.json";
export const AboutMe = () => {
  return (
    <>
      <div className=" flex items-center justify-center text-5xl">
        <div className="font-semibold">
          <p className="code">
            kam<span>RUN</span>code.com
          </p>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <p className=" p-1 py-20 text-center text-xl font-semibold">
          Hi dears 👋 My name is Kamran🙂 <br /> I am a developer who has been
          working with FrontEnd technologies for the last 1.5 years and trying
          to improve myself on projects as a freelancer.
          <br /> You can read and benefit from my articles about interesting
          coding that I have researched and implemented😉
        </p>
      </div>
      <div className=" flex items-center justify-center flex-col">
        <div className="  py-10">
          <div className="skill">
            <p className="text-2xl	text-center my-10 font-bold">
              PROGRAMMING SKILLS
            </p>
            <div className="grid grid-cols-3 gap-4 place-items-center  my-20">
              {Logos.map((logo, i) => {
                return <img src={logo} key={i} className="w-[5rem]" />;
              })}
            </div>
          </div>
          <hr />

          <p className="text-2xl	text-center my-20 font-bold">WORK EXPERIENCE</p>
          {WorkData.map((data) => {
            return (
              <MyExEd
                key={data.id}
                logo={data.logo}
                title={data.title}
                desc={data.desc}
                yearIcon={<ImCalendar />}
                year={data.year}
                timeIcon={<ImClock />}
                time={data.time}
                locIcon={<ImLocation />}
                location={data.location}
              />
            );
          })}

          <hr />
          <p className="text-2xl	text-center my-20 font-bold">EDUCATION</p>
          {EduData.map((data) => {
            return (
              <MyExEd
                key={data.id}
                logo={data.logo}
                title={data.title}
                desc={data.desc}
                yearIcon={<ImCalendar />}
                year={data.year}
                locIcon={<ImLocation />}
                location={data.location}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
