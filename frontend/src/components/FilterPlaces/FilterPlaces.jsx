import React from "react";
import "./ImageCheckboxes.css";
import scroll1 from "../Addvertisement/Images/scroll1.png";
import { useNavigate } from "react-router-dom";
import scroll2 from "../Addvertisement/Images/scroll2.png";

import scroll3 from "../Addvertisement/Images/scroll3.png";

import scroll5 from "../Addvertisement/Images/scroll5.png";

import scroll6 from "../Addvertisement/Images/scroll6.png";
import { FaSnowboarding } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa6";
import { MdSevereCold } from "react-icons/md";
import { FcLike } from "react-icons/fc";
const FilterPlaces = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between  items-end m-3 ">
        <h1 className="text-[35px] font-bold">Season</h1>
        <button
          className="px-2 mb-2 h-[30px] 
        bg-gradient-to-r  from-[#2a3e3b] to-[#0c3d35ca] text-white rounded font-semibold "
          onClick={() => {
            navigate("/FilterMainSort");
          }}
        >
          Apply...
        </button>
      </div>
      <section className="flex flex-wrap justify-around ">
        <div className="custom__check__season">
          <picture>
            <img src={scroll1} height={60} width={60} alt="scroll1" />
          </picture>
          <aside className="header__check">
            <p>Cold/Icee</p>
            <h1>WInter</h1>
          </aside>
          <p>
            <input type="checkbox" className="check__filter" />
          </p>
        </div>
        <div className="custom__check__season">
          <picture>
            <img src={scroll3} height={60} width={60} alt="scroll1" />
          </picture>
          <aside className="header__check">
            <p>Beach/Sun</p>
            <h1>Summer</h1>
          </aside>
          <p>
            <input type="checkbox" className="check__filter" />
          </p>
        </div>{" "}
        <div className="custom__check__season">
          <picture>
            <img src={scroll5} height={60} width={60} alt="scroll1" />
          </picture>
          <aside className="header__check">
            <p>Flour/Leaf</p>
            <h1>Spring</h1>
          </aside>
          <p>
            <input type="checkbox" className="check__filter" />
          </p>
        </div>{" "}
        <div className="custom__check__season">
          <picture>
            <img src={scroll6} height={60} width={60} alt="scroll1" />
          </picture>
          <aside className="header__check">
            <p>Water/Tears</p>
            <h1>Rainy</h1>
          </aside>
          <p>
            <input type="checkbox" className="check__filter" />
          </p>
        </div>
      </section>
      <h2 className="text-[27px] mt-5 text-center font-bold">OR</h2>
      <div className="flex justify-between  items-end m-3 ">
        <h1 className="text-[35px] font-bold">Month</h1>
        <button
          className="px-2 mb-2 h-[30px] 
        bg-gradient-to-r from-[#2a3e3b] to-[#0c3d35ca] text-white rounded font-semibold "
          onClick={() => {
            navigate("/FilterMainSort");
          }}
        >
          Apply...
        </button>
      </div>
      <section className="month__filter ">
        <div>
          <h1>January</h1>
          <p>
            <FaSnowboarding />
          </p>
        </div>
        <div>
          <h1>February</h1>
          <p>
            <FaSnowboarding />
          </p>
        </div>
        <div>
          <h1>March</h1>
          <p>
            <BsFillSunFill />
          </p>
        </div>
        <div>
          <h1>April</h1>
          <p>
            <BsFillSunFill />
          </p>
        </div>
        <div>
          <h1>May</h1>
          <p>
            <BsFillSunFill />
          </p>
        </div>
        <div>
          <h1>June</h1>
          <p>
            <BsFillSunFill />
          </p>
        </div>
        <div>
          <h1>July</h1>
          <p>
            <FaCanadianMapleLeaf />
          </p>
        </div>
        <div>
          <h1>August</h1>
          <p>
            <FaCanadianMapleLeaf />
          </p>
        </div>
        <div>
          <h1>September</h1>
          <p>
            <FaCloudRain />
          </p>
        </div>
        <div>
          <h1>October</h1>
          <p>
            <FaCloudRain />
          </p>
        </div>
        <div>
          <h1>November</h1>
          <p>
            <MdSevereCold />
          </p>
        </div>
        <div>
          <h1>December</h1>
          <p>
            <MdSevereCold />
          </p>
        </div>
      </section>
      <h2 className="text-[27px] mt-5 text-center font-bold">OR</h2>
      <div className="flex justify-between  items-end m-3 ">
        <h1 className="text-[35px] font-bold">BY People</h1>
      </div>
      <section className="filter__data__table">
        <table>
          <tbody
            onClick={() => {
              navigate("/FilterMainSort");
            }}
          >
            <tr>
              <td className="w-[60px]">
                {" "}
                <img
                  src={scroll1}
                  height={60}
                  width={60}
                  alt="scroll1"
                  className="w-[60px] rounded-md"
                />
              </td>
              <td>Laddak</td>
              <td className="text-end">8k</td>
              <td className="text-end">
                <div className="flex  gap-1 justify-end">
                  {" "}
                  <p className="text-[14px]">55</p>{" "}
                  <p className="text-lg">
                    {" "}
                    <FcLike />
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-[60px]">
                {" "}
                <img
                  src={scroll6}
                  height={60}
                  width={60}
                  alt="scroll1"
                  className="w-[60px] rounded-md"
                />
              </td>
              <td>Kerela</td>
              <td className="text-end">29k</td>
              <td className="text-end">
                <div className="flex  gap-1 justify-end">
                  {" "}
                  <p className="text-[14px]">25</p>{" "}
                  <p className="text-lg">
                    {" "}
                    <FcLike />
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-[60px]">
                {" "}
                <img
                  src={scroll3}
                  height={60}
                  width={60}
                  alt="scroll1"
                  className="w-[60px] rounded-md"
                />
              </td>
              <td>kolkata</td>
              <td className="text-end">15k</td>
              <td className="text-end">
                <div className="flex  gap-1 justify-end">
                  {" "}
                  <p className="text-[14px]">5</p>{" "}
                  <p className="text-lg">
                    {" "}
                    <FcLike />
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-[60px]">
                {" "}
                <img
                  src={scroll2}
                  height={60}
                  width={60}
                  alt="scroll1"
                  className="w-[60px] rounded-md"
                />
              </td>
              <td>Goa</td>
              <td className="text-end">50k</td>
              <td className="text-end">
                <div className="flex  gap-1 justify-end">
                  {" "}
                  <p className="text-[14px]">55</p>{" "}
                  <p className="text-lg">
                    {" "}
                    <FcLike />
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default FilterPlaces;
