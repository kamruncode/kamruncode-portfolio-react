import React from "react";
import MyExEd from "../assets/ExEdContainer";
import notes from "../Data/Notes.json";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { ImClock } from "react-icons/im";
import hash from "./hash.png";
export function Notes() {
  return (
    <>
      <div className=" flex items-center justify-center flex-col">
        <p className="media flex  items-center opacity-0 text-3xl">
          <p>my notes</p>
          <MdOutlineSpeakerNotes className=" ml-1" />
        </p>
        <div className="py-8">
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
