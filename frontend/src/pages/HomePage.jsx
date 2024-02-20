import React, { useState, useEffect } from "react";
import { LuLogIn } from "react-icons/lu";
import { IoMdPersonAdd } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Scroll from "../components/Scroll/Scroll";
import "./HomePage.css";
import InfiniteCardSlider from "../components/Addvertisement/InfiniteCardSlider";
import FooterNavigate from "../components/FooterNavigate/FooterNavigate";
import { LuSunSnow } from "react-icons/lu";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaRobot } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
const HomePage = () => {
  return (
    <div className="">
      <header className="p-2 flex flex-col gap-2 bg-[#18191beb] h-[30vh] rounded-b-xl">
        <section className="flex items-center justify-between h-[5vh]">
          <div className="flex items-center    justify-between bg-[#deeef2]  w-1/3 m-1 rounded p-1">
            <picture className="mx-2">
              <IoMdPersonAdd />
            </picture>
            <h3 className="font-bold text-gray-800 ">Login</h3>
            <p className="mx-2">
              <LuLogIn />
            </p>
          </div>
          <div className=" text-white flex gap-2 text-[22px]">
            <p className="bg-[#333333] p-2 rounded">
              <HiOutlineSpeakerphone />
            </p>
            <p className="bg-[#333333] p-2 rounded">
              <IoMdChatbubbles />
            </p>
            <p className="bg-[#333333] p-2 rounded">
              <IoNotifications />
            </p>
          </div>
        </section>
        <div>
          <aside className="">
            <aside className="scroll w-[100%] h-auto ">
              <InfiniteCardSlider />
            </aside>
            <div className="bg-[#1c1d1f]"></div>
          </aside>
        </div>
      </header>

      <section className="bg-[#e6e9ed] h-[90vh]">
        <Scroll />

        <div class="m-1 rounded-b-2xl rounded-t-sm bg-gradient-to-r from-[#2a3e3b] to-[#0c3d35ca] h-[100px] flex items-start flex-col p-2 px-4 gap-2">
          <p className="text-stone-50 text-[22px]">
            Beyound world...{" "}
            <span className="text-[16px]"> Beyound reach...</span>
          </p>
          <div className="w-[100%] relative">
            <input
              type="text"
              className="w-[100%] rounded-3xl h-[40px] p-1 px-5 "
              placeholder="search..."
            />
            <p className="absolute top-0 right-0 h-[30px] flex items-center px-4 bg-white rounded-3xl my-1">
              <FaSearch />
            </p>
          </div>
        </div>
        <main className="my-3 mx-2 rounded-2xl w-auto bg-white p-2">
          <header className="flex justify-between items-end">
            <h1 className="text-2xl font-semibold">Plan according to</h1>
            <p className="bg-slate-200 rounded-xl px-2 ">more...</p>
          </header>
          <section className="sort__first__season__budget">
            <aside>
              <p>
                <LuSunSnow />
              </p>
              <p> Season</p>
            </aside>
            <aside>
              {" "}
              <p>
                <FaPeopleGroup />
              </p>
              <p> Croud</p>
            </aside>
            <aside>
              {" "}
              <p>
                <GiTakeMyMoney />
              </p>
              <p> Budget</p>
            </aside>
            <aside>
              {" "}
              <p>
                <FaRobot />
              </p>
              <p> AI top-pic</p>
            </aside>
          </section>
        </main>
      </section>

      <section className="fixed bottom-0 w-[100%]">
        <FooterNavigate />
      </section>
    </div>
  );
};

export default HomePage;
