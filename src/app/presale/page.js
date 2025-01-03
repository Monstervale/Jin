"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  return (
    <div class="bg-black relative  w-full h-screen min-h-screen overflow-auto">
      <div className=" relative min-h-full h-full p-5 rounded-lg text-center  w-full md:w-[80%] lg:w-[70%] mx-auto z-40">
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
          src="/presale_title.png"
          className="absolute hidden md:block top-[17.8%] left-[30.8%] !w-[38%]  !h-[9.5%]"
        />
        <img
          src="/presale_yellow.png"
          className="absolute hidden md:block top-[17.8%] left-[32.5%] !w-[34%]  !h-[9.5%] "
        />

        <img
          src="/presale_mobile_title.png"
          className="absolute top-[17.8%] block md:hidden left-[30.8%] !w-[38%] !h-[9.5%]"
        />

        <img
          src="/presale_mobile_title_text.png"
          className="absolute top-[18.2%] block md:hidden left-[33.5%] !w-[30.5%] !h-[7.8%]  "
        />

        <div className=" absolute top-[36%] w-[90%] md:w-[97%] flex justify-center  mx-auto !h-[55%] overflow-auto ">
          <div className=" w-[60%] md:w-[60%] m-auto mx-auto text-[#FFFFFFE5] font-bold">
            <div className="flex justify-center gap-0 card">
              <img
                src="/presale.png"
                className="w-[180px] h-[180px] md:w-[580px] object-contain md:h-[240px] z-10 transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div className="text-center space-y-2">
              <div className=" animate-slide-in  !mt-2 text-[24px] font-black !font-titillium md:text-[54px]">
                COMING SOON
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner-container-sub !absolute !inset-0 z-10"></div>
      <div className=" !absolute !inset-0 bg-[#0C0404CC] z-20"></div>
    </div>
  );
}
