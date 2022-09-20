import React from "react";
import MyExEd from "../assets/ExEdContainer";
import articles from "../Data/Articles.json";
import { AiOutlineRightCircle } from "react-icons/ai";
export default function Articles() {
  return (
    <>
      <div className=" flex items-center justify-center flex-col">
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
