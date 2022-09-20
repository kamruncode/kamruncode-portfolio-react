import React from "react";
import { ImCalendar } from "react-icons/im";
import "./ExExContainer.css";
export default function MyExEd(p) {
  return (
    <div className="exp flex justify-between my-12">
      <div className="ExpTitle flex">
        <img src={p.logo} className="w-[5rem]" />
        <div className="flex justify-around flex-col ml-3">
          <p className="text-xl  font-bold">{p.title}</p>
          <p className="mr-5 mb-3">
            {p.desc.length > 84 ? p.desc.substring(0, 85) + "..." : p.desc}
          </p>
        </div>
      </div>
      <div className="flex justify-around flex-col w-[13rem]">
        <div className=" flex items-center text-lg  font-semibold">
          {p.yearIcon}
          <p className="ml-3">{p.year} </p>
        </div>
        <div className=" flex items-center text-lg  font-semibold">
          {p.timeIcon}
          <p className="ml-3">{p.time}</p>
        </div>
        <div className=" flex items-center text-lg  font-semibold">
          {p.locIcon}
          <p className="ml-3"> {p.location}</p>
        </div>
      </div>
    </div>
  );
}
