import React, { useState } from "react";
import "./FooterNavigate.css";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import {
  FaHeart,
  FaRegHeart,
  FaSearchLocation,
  FaSearchengin,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoPersonSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const FooterNavigate = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active icon index

  const handleIconClick = (index) => {
    setActiveIndex(index); // Update active index on icon click
  };

  return (
    <div className="px-3 py-1 w-[100%]">
      <section className="px-5 rounded-[40px] bg-[#181717d1] h-[60px] for__footer__icons">
        <p
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => handleIconClick(0)}
        >
          {activeIndex === 0 && <IoHome />}
          {activeIndex !== 0 && <IoHomeOutline />}
        </p>
        <p
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleIconClick(1)}
        >
          {activeIndex === 1 && <FaHeart />}
          {activeIndex !== 1 && <FaRegHeart />}
        </p>
        <p
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => handleIconClick(2)}
        >
          {activeIndex === 2 && <FaSearchLocation />}
          {activeIndex !== 2 && <FaSearchengin />}
        </p>
        <p
          className={activeIndex === 3 ? "active" : ""}
          onClick={() => handleIconClick(3)}
        >
          {activeIndex === 3 && <FiShoppingCart />}
          {activeIndex !== 3 && <FiShoppingCart />}
        </p>
        <p
          className={activeIndex === 4 ? "active" : ""}
          onClick={() => handleIconClick(4)}
        >
          {activeIndex !== 4 && <CgProfile />}
          {activeIndex === 4 && <IoPersonSharp />}
        </p>
      </section>
    </div>
  );
};

export default FooterNavigate;
