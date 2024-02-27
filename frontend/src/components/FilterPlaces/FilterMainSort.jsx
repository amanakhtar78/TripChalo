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

const FilterMainSort = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between  items-end m-3 ">
        <h1 className="text-[28px] font-bold">Like to Go</h1>
        <button
          className="px-2 mb-2 h-[30px] 
        bg-gradient-to-r from-[#2a3e3b] to-[#0c3d35ca] text-white rounded font-semibold "
          onClick={() => {
            navigate("/TripPlan");
          }}
        >
          Apply...
        </button>
      </div>
      <section className="month__filter">
        <div>
          <h1>Beach</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Mountain</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Temple</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Mosque</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Church</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Mall</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>National Park</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Waterfall</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Lake</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Forest</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Historical Site</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Theme Park</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Zoo</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Aquarium</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Botanical Garden</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Ski Resort</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Camping Site</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Desert</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Island</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Vineyard</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Farm</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Spa Resort</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Hot Spring</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Cultural Festival</h1>
          <p>
            <FcLike />
          </p>
        </div>

        <div>
          <h1>Cruise</h1>
          <p>
            <FcLike />
          </p>
        </div>
      </section>
      <h2 className="text-[27px] mt-5 text-center font-bold">OR</h2>

      <div className="flex justify-between  items-end m-3 ">
        <h1 className="text-[35px] font-bold">BY People</h1>
      </div>
      <section className="filter__data__table">
        <table>
          <tbody>
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

export default FilterMainSort;
