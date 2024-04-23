import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { RiEBike2Line } from "react-icons/ri";
import { BsFillBusFrontFill } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import "./TripOverView.css";
import { Carousel } from "@mantine/carousel";
import { FaCartPlus } from "react-icons/fa";
import { BsCartDashFill } from "react-icons/bs";
import "@mantine/carousel/styles.css";
//
import nandi1 from "./images/nandi1.png";
import nandi2 from "./images/nandi2.png";
import nandi3 from "./images/nandi3.png";
import nandi4 from "./images/nandi4.png";
import vid1 from "./images/vid1.png";
import vid2 from "./images/vid2.png";
import vid3 from "./images/vid3.png";
import vid4 from "./images/vid4.png";
import cub1 from "./images/cub1.jpg";
import cub2 from "./images/cub2.jpg";
import cub3 from "./images/cub3.jpg";
import cub4 from "./images/cub4.jpg";
import lal1 from "./images/lal1.png";
import lal2 from "./images/lal2.png";
import lal3 from "./images/lal3.png";
import lal4 from "./images/lal4.png";
import scroll1 from "./images/scroll1.png";
import scroll2 from "./images/scroll2.png";
import scroll3 from "./images/scroll3.png";
import scroll4 from "./images/scroll4.png";
const TripOverView = () => {
  return (
    <div>
      <section className="flex justify-between items-baseline m-2">
        <h1 className="text-[30px] ">Banglore</h1>
        <div className="flex items-center gap-2 ">
          <h2 className="font-semibold">Days </h2>
          <input type="number" placeholder="ex-2... " className="w-[60px]" />
        </div>
      </section>
      <main>
        <aside className="flex my-6 gap-1 justify-around items-end">
          <div className="w-[40%] flex gap-1 justify-between icons__for__travel">
            <div>
              <h4>
                <RiEBike2Line />
              </h4>
              <p>500</p>
            </div>
            <div>
              <h4>
                <FaCarSide />
              </h4>
              <p>1000</p>
            </div>
            <div>
              <h4>
                <BsFillBusFrontFill />
              </h4>
              <p>200</p>
            </div>
          </div>
          <div className="w-[10%] text-[43px]">
            <FaLongArrowAltDown />
          </div>
          <div className="w-[40%] flex flex-col ">
            <p className="font-serif underline  ">Mejestic bus stand</p>
            <p>100km</p>
          </div>
        </aside>
        <section className="my-4">
          <div className="flex m-1 gap-2 rounded  bg-slate-300 p-1 shadow-md">
            <aside className="w-[50%] carosL__img p-1">
              <Carousel
                slideSize="80%"
                height={200}
                slideGap="xs"
                controlsOffset="xs"
                controlSize={14}
                loop
                withIndicators
                className="bg-white h-[100px]"
              >
                <Carousel.Slide>
                  <img src={nandi1} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={nandi2} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={nandi3} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={nandi4} height={100} width={280} alt="" />
                </Carousel.Slide>
              </Carousel>
              <div className="flex justify-between py-2 px-1  font-bold text-sm">
                <p>06am-10am</p>
                <h6>1000rs</h6>
              </div>
            </aside>
            <aside className="w-[50%] bg-white p-2 m-1 rounded shadow-lg">
              <div className="flex flex-col  ">
                <div className="flex justify-between">
                  <h1 className="text-lg font-bold underline">NAndi</h1>
                  <div className="flex items-center gap-1 text-sm font-semibold">
                    <p>5k </p>
                    <p>
                      <FcLike />
                    </p>
                  </div>
                </div>

                <h1 className="text-sm py-1">
                  Activity- para-gliding, sight seeing, temple, cloud
                </h1>
                <h1 className="flex justify-between gap-2 items-end ">
                  <div className="flex items-center gap-1 font-thin font-serif ">
                    <p>1000rs </p>
                  </div>
                  <button className="text-3xl bg-white text-blue-900 p-1 shadow-md ">
                    <FaCartPlus />
                  </button>
                </h1>
              </div>
            </aside>
          </div>
        </section>
        <aside className="flex my-6 gap-1 justify-around items-end">
          <div className="w-[40%] flex gap-1 justify-between icons__for__travel">
            <div>
              <h4>
                <RiEBike2Line />
              </h4>
              <p>600</p>
            </div>
            <div>
              <h4>
                <FaCarSide />
              </h4>
              <p>1300</p>
            </div>
            <div>
              <h4>
                <BsFillBusFrontFill />
              </h4>
              <p>300</p>
            </div>
          </div>
          <div className="w-[10%] text-[43px]">
            <FaLongArrowAltDown />
          </div>
          <div className="w-[40%] flex flex-col ">
            <p className="font-serif underline  ">Nandi </p>
            <p>120km</p>
          </div>
        </aside>
        <section className="my-4">
          <div className="flex m-1 gap-2 rounded  bg-slate-300 p-1 shadow-md">
            <aside className="w-[50%] carosL__img p-1">
              <Carousel
                slideSize="80%"
                height={200}
                slideGap="xs"
                controlsOffset="xs"
                controlSize={14}
                loop
                withIndicators
                className="bg-white h-[100px]"
              >
                <Carousel.Slide>
                  <img src={cub1} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={cub2} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={cub3} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={cub4} height={100} width={280} alt="" />
                </Carousel.Slide>
              </Carousel>
              <div className="flex justify-between py-2 px-1  font-bold text-sm">
                <p>02pm-03pm</p>
                <h6>400rs</h6>
              </div>
            </aside>
            <aside className="w-[50%] bg-white p-2 m-1 rounded shadow-lg">
              <div className="flex flex-col   ">
                <div className="flex justify-between">
                  <h1 className="text-md font-bold underline">Cubban Park</h1>
                  <div className="flex items-center gap-1 text-[12px] font-semibold">
                    <p>15k </p>
                    <p className="text-[10px] ">
                      <FcLike />
                    </p>
                  </div>
                </div>

                <h1 className="text-sm py-1">
                  Activity- park, sight seeing, monuments, relax
                </h1>
                <h1 className="flex justify-between gap-2 items-end ">
                  <div className="flex items-center gap-1 font-thin font-serif ">
                    <p>500rs </p>
                  </div>
                  <button className="text-3xl bg-white text-blue-900 p-1 shadow-md ">
                    <FaCartPlus />
                  </button>
                </h1>
              </div>
            </aside>
          </div>
        </section>
        <aside className="flex my-6 gap-1 justify-around items-end">
          <div className="w-[40%] flex flex-col justify-end items-end">
            <p className="font-serif underline  text-right">Cubban Park</p>
            <p>2km</p>
          </div>
          <div className="w-[10%] text-[43px]">
            <FaLongArrowAltDown />
          </div>

          <div className="w-[40%] flex gap-1 justify-between icons__for__travel">
            <div>
              <h4>
                <RiEBike2Line />
              </h4>
              <p>30</p>
            </div>
            <div>
              <h4>
                <FaCarSide />
              </h4>
              <p>60</p>
            </div>
            <div>
              <h4>
                <BsFillBusFrontFill />
              </h4>
              <p>10</p>
            </div>
          </div>
        </aside>
        <section className="my-4">
          <div className="flex m-1 gap-2 rounded  bg-slate-300 p-1 shadow-md">
            <aside className="w-[50%] carosL__img p-1">
              <Carousel
                slideSize="80%"
                height={200}
                slideGap="xs"
                controlsOffset="xs"
                controlSize={14}
                loop
                withIndicators
                className="bg-white h-[100px]"
              >
                <Carousel.Slide>
                  <img src={vid1} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={vid2} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={vid3} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={vid4} height={100} width={280} alt="" />
                </Carousel.Slide>
              </Carousel>
              <div className="flex justify-between py-2 px-1  font-bold text-sm">
                <p>03pm-4pm</p>
                <h6>100rs</h6>
              </div>
            </aside>
            <aside className="w-[50%] bg-white p-2 m-1 rounded shadow-lg">
              <div className="flex flex-col  ">
                <div className="flex justify-between">
                  <h1 className="text-md font-bold underline">vidhana sou..</h1>
                  <div className="flex items-center gap-1 text-sm font-semibold">
                    <p>8k </p>
                    <p>
                      <FcLike />
                    </p>
                  </div>
                </div>

                <h1 className="text-sm py-1">
                  Activity- monument, park, sight seeing, picture
                </h1>
                <h1 className="flex justify-between gap-2 items-end ">
                  <div className="flex items-center gap-1 font-thin font-serif ">
                    <p>150rs </p>
                  </div>
                  <button className="text-3xl bg-white text-blue-900 p-1 shadow-md ">
                    <FaCartPlus />
                  </button>
                </h1>
              </div>
            </aside>
          </div>
        </section>
        <aside className="flex my-6 gap-1 justify-around items-end">
          <div className="w-[40%] flex flex-col justify-end items-end">
            <p className="font-serif underline  text-right">Vidhana soudha</p>
            <p>15km</p>
          </div>
          <div className="w-[10%] text-[43px]">
            <FaLongArrowAltDown />
          </div>

          <div className="w-[40%] flex gap-1 justify-between icons__for__travel">
            <div>
              <h4>
                <RiEBike2Line />
              </h4>
              <p>80</p>
            </div>
            <div>
              <h4>
                <FaCarSide />
              </h4>
              <p>150</p>
            </div>
            <div>
              <h4>
                <BsFillBusFrontFill />
              </h4>
              <p>20</p>
            </div>
          </div>
        </aside>
        <section className="my-4">
          <div className="flex m-1 gap-2 rounded  bg-slate-300 p-1 shadow-md">
            <aside className="w-[50%] carosL__img p-1">
              <Carousel
                slideSize="80%"
                height={200}
                slideGap="xs"
                controlsOffset="xs"
                controlSize={14}
                loop
                withIndicators
                className="bg-white h-[100px]"
              >
                <Carousel.Slide>
                  <img src={lal1} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={lal2} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={lal3} height={100} width={280} alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src={lal4} height={100} width={280} alt="" />
                </Carousel.Slide>
              </Carousel>
              <div className="flex justify-between py-2 px-1  font-bold text-sm">
                <p>05pm-07pm</p>
                <h6>200rs</h6>
              </div>
            </aside>
            <aside className="w-[50%] bg-green-50 p-2 m-1 rounded shadow-lg">
              <div className="flex flex-col  ">
                <div className="flex justify-between">
                  <h1 className="text-lg font-bold underline">Lal Bagh</h1>
                  <div className="flex items-center gap-1 text-sm font-semibold">
                    <p>39k </p>
                    <p>
                      <FcLike />
                    </p>
                  </div>
                </div>

                <h1 className="text-sm py-1">
                  <span className="">Activity</span>- park, pond, temple,
                  small-mountain, flowers
                </h1>
                <h1 className="flex justify-between gap-2 items-end ">
                  <div className="flex items-center gap-1 font-thin font-serif ">
                    <p>500rs </p>
                  </div>
                  <button className="text-3xl bg-white text-blue-900 p-1 shadow-md ">
                    <BsCartDashFill />
                  </button>
                </h1>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <main className="h-[200px]"></main>
    </div>
  );
};

export default TripOverView;
