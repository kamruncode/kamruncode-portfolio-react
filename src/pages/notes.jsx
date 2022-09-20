import React from "react";
import MyExEd from "../assets/ExEdContainer";
import notes from "../Data/Notes.json";
import { AiOutlineRightCircle } from "react-icons/ai";
import { ImClock } from "react-icons/im";
import hash from "./hash.png";
import second from "../components/profile.png";
export function Notes() {
  return (
    <>
      <div className=" flex items-center justify-center flex-col">
        <div className="py-10">
          {notes.map((data) => {
            return (
              <>
                <MyExEd
                  key={data.id}
                  logo={hash}
                  title={data.title}
                  desc={data.desc}
                  yearIcon={
                    <ImClock size={22} className="hover:text-sky-700" />
                  }
                  year={data.time}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
