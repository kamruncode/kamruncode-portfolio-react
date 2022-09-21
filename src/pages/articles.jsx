import React from "react";
import MyExEd from "../assets/ExEdContainer";
import articles from "../Data/Articles.json";
import { AiOutlineRightCircle } from "react-icons/ai";
import { BsFillBookmarkStarFill } from "react-icons/bs";
export default function Articles() {
  return (
    <>
      <div className=" flex items-center justify-center flex-col">
        <p className=" flex items-center">
          <p className=" text-3xl">my articles</p>
          <BsFillBookmarkStarFill className=" ml-1 text-xl" />
        </p>
        <div className="py-10">
          {articles.map((data) => {
            return (
              <>
                <a href={data.link}>
                  <MyExEd
                    key={data.id}
                    logo={data.logo}
                    title={data.title}
                    desc={data.desc}
                    yearIcon={
                      <AiOutlineRightCircle
                        size={35}
                        className="hover:text-sky-700"
                      />
                    }
                  />
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
