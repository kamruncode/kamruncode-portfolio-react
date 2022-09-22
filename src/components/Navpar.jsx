import profile from "./profile.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = (props) => {
  const [showNav, setShowNav] = useState(false);

  const HambMenu = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="topnav"></div>
      <section className="navbar pt-4 mb-10 flex justify-around">
        <div className=" w-full flex items-center justify-center">
          <div className=" profile flex items-end ">
            <img src={profile} className="h-20" />
          </div>

          <ul className="nav-items flex justify-between font-serif text-lg font-semibold mx-40">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive && "border-b-2 hover:translate-y-1 duration-500"
              }
            >
              <li className="mx-10 ">ME</li>
            </NavLink>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive && " border-b-2 hover:translate-y-1 duration-500"
              }
            >
              <li className="mx-5">Articles</li>
            </NavLink>
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                isActive && "border-b-2 hover:translate-y-1 duration-500"
              }
            >
              <li className="mx-5">Notes</li>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive && " border-b-2 hover:translate-y-1 duration-500"
              }
            >
              <li className="mx-5">Contact</li>
            </NavLink>
          </ul>
          {props.d}
          <div
            className={"hamburger " + (showNav ? " borBacHam" : " opacity-100")}
            onClick={HambMenu}
          >
            <div
              className={"bars " + (showNav ? " opacity-0" : " opacity-100")}
            >
              <span className="bar "></span>
              <span className="bar "></span>
              <span className="bar "></span>
            </div>
          </div>
        </div>

        {/* HAMBURGER MENU */}
        <div className="hamburger-menu">
          <div className={showNav ? " block" : " hidden"}>
            <ul className="hamburger-Nav-item flex flex-col justify-around items-center backdrop-blur-md bg-white/30">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive && "outline rounded outline-pink-500"
                }
                onClick={() => {
                  setShowNav(!showNav);
                }}
              >
                <li>About Me</li>
              </NavLink>
              <NavLink
                to="/articles"
                className={({ isActive }) =>
                  isActive && "outline rounded outline-cyan-500"
                }
                onClick={() => {
                  setShowNav(!showNav);
                }}
              >
                <li>Articles</li>
              </NavLink>
              <NavLink
                to="/notes"
                className={({ isActive }) =>
                  isActive && "outline rounded outline-cyan-500"
                }
                onClick={() => {
                  setShowNav(!showNav);
                }}
              >
                <li>Notes</li>
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive && "outline rounded  outline-cyan-500"
                }
                onClick={() => {
                  setShowNav(!showNav);
                }}
              >
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
