"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HoverImage } from "../page";

export default function page() {
  const router = useRouter();
  return (
    <div class=" bg-black/80 relative  w-full h-screen min-h-screen overflow-auto">
      <div className=" relative min-h-full h-full p-5 rounded-lg text-center  w-full md:w-[80%] lg:w-[70%] mx-auto z-40 ">
        <img
          src="/back_icon.png"
          alt="Close"
          style={{
            zIndex: 999999999,
          }}
          className="absolute z-50 top-6 right-4  md:top-6 md:right-6 w-8 h-8 md:w-14 md:h-14 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <img
          src="/how_to_buy_bg.png"
          className=" absolute inset-0 h-full w-full  "
        />

        <img
          src="/about_title.png"
          className="absolute hidden md:block top-[17.8%] left-[30.7%] !w-[38.2%]  !h-[9.5%]  "
        />

        <img
          src="/about_mobile_title.png"
          className="absolute top-[17.8%] block md:hidden left-[30.7%] !w-[38.2%] !h-[9.5%] "
        />

        <div className=" absolute top-[38%]  w-[90%] sm:w-[97%]  mx-auto !h-[50%] overflow-auto ">
          <div className=" w-[60%] md:w-[50%] !font-semibold tracking-tighter !font-titillium text-[16px] md:text-[24px] mx-auto text-[#FFFFFFE5] animate-fade-in ">
            <p>
              For twelve long years, Jin, whose name means "gold" in Chinese,
              has coiled in his hidden temple, silently observing the world and
              waiting for the "Year of the Snake"—a time destined for wisdom,
              transformation, and fortune.
            </p>
            <br />
            <p>
              As a master of patience and strategy, Jin has shaped the tides of
              the crypto world, aligning the bull run with this auspicious year.
              He stands as the embodiment of luck and prosperity, filling his
              temple with treasures of wealth and enlightenment.
            </p>
            <br />
            <p>
              Now, Jin is ready to bless those who seek their fortune. Will you
              embrace Jin’s power and claim your place in this era of boundless
              prosperity, or will you let this once-in-a-lifetime opportunity
              slip away?
            </p>
          </div>
        </div>
      </div>
      <div className="inner-container-sub !absolute !inset-0 z-10"></div>
      <div className=" !absolute !inset-0 bg-[#0C0404CC] z-20"></div>
    </div>
  );
}
