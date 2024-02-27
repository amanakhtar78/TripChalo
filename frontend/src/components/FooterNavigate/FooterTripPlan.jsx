import React, { useState } from "react";
import "./FooterNavigate.css";
import { useNavigate } from "react-router-dom";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import {
  FaHeart,
  FaRegHeart,
  FaSearchLocation,
  FaSearchengin,
} from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FaCloudSunRain } from "react-icons/fa";
import { WiDayRain } from "react-icons/wi";
import { CgProfile } from "react-icons/cg";
import { IoPersonSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTruckPlane } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
const FooterFilter = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active icon index

  const handleIconClick = (index) => {
    setActiveIndex(index); // Update active index on icon click
  };
  const navigate = useNavigate();
  return (
    <div className="px-3 py-1 w-[100%]">
      <section className="px-5 rounded-[40px] bg-[#181717d1] h-[60px] for__footer__icons">
        <p
          className={activeIndex === 4 ? "active" : ""}
          onClick={() => {
            handleIconClick(4);
            navigate("/");
          }}
        >
          {activeIndex !== 4 && <IoHome />}
          {activeIndex === 4 && <IoHome />}
        </p>
        <p
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => handleIconClick(0)}
        >
          {activeIndex === 0 && <FaTruckPlane />}
          {activeIndex !== 0 && <FaTruckPlane />}
        </p>
        <p
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleIconClick(1)}
        >
          {activeIndex === 1 && <FaSearchLocation />}
          {activeIndex !== 1 && <FaSearchLocation />}
        </p>
        <p
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => handleIconClick(2)}
        >
          {activeIndex === 2 && <FiShoppingCart />}
          {activeIndex !== 2 && <FiShoppingCart />}
        </p>
        <p
          className={activeIndex === 3 ? "active" : ""}
          onClick={() => handleIconClick(3)}
        >
          {activeIndex === 3 && <CgProfile />}
          {activeIndex !== 3 && <CgProfile />}
        </p>
      </section>
    </div>
  );
};

export default FooterFilter;
