import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import {
  FaLinkedinIn,
  FaCodepen,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { BsInstagram, BsPinterest, BsGithub, BsWhatsapp } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hl40dh6",
        "template_wbevo6p",
        form.current,
        "gyAtCqaiqcdgyQy4J"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [send, setSend] = useState(false);
  const SendMessage = () => {
    setSend(true);
    console.log(send);
  };

  const dataSocialMedia = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/kamran-tahmazbayli-7612b1170/",
      icon: <FaLinkedinIn />,
    },
    {
      id: 2,
      link: "https://www.instagram.com/kamran.tahmazbay/",
      icon: <BsInstagram />,
    },
    {
      id: 3,
      link: "https://www.facebook.com/kamran.tehmezbeyli.5/",
      icon: <FaFacebookF />,
    },
    {
      id: 4,
      link: "https://api.whatsapp.com/send/?phone=994504241059&text&type=phone_number&app_absent=0",
      icon: <BsWhatsapp />,
    },
    { id: 5, link: "https://twitter.com/kamruncode", icon: <FaTwitter /> },
    {
      id: 6,
      link: "https://www.pinterest.com/kamruncode/",
      icon: <BsPinterest />,
    },
    { id: 7, link: "https://github.com/kamruncode", icon: <BsGithub /> },
    { id: 8, link: "https://twitter.com/kamruncode", icon: <FaTwitter /> },
    { id: 9, link: "https://codepen.io/kamruncode", icon: <FaCodepen /> },
    {
      id: 10,
      link: "https://medium.com/@kamran.tahmazbayli",
      icon: <SiMedium />,
    },
  ];

  return (
    <div className="general-container flex items-center justify-center flex-col">
      <div className=" py-20 flex justify-center items-center ">
        <div className="socialN flex justify-between p-5">
          {dataSocialMedia.map((item) => {
            return (
              <>
                <a href={item.link}>
                  <div
                    className="social hover:text-amber-500  duration-200 hover:text-amber-500  duration-200 text-5xl mx-3"
                    key={item.id}
                  >
                    {item.icon}
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
      <div className="container flex justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col form p-5"
        >
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="your name"
            className="form-input"
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="your email adress"
            className="form-input"
          />
          <label>Message</label>
          <textarea name="message" placeholder="write your message..." />

          <div className="submitBtn flex justify-start items-center w-[15rem] ">
            {send ? (
              <>
                <TiTick size="3rem" color="#5CBA2D" />{" "}
                <div className="sent">SENT</div>
              </>
            ) : (
              ""
            )}

            <input
              type="submit"
              value={!send ? "Send" : ""}
              onClick={SendMessage}
              className={
                !send
                  ? " bg-blue-600 text-white flex justify-center "
                  : "hidden"
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};
