"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  return (
    <div class="bg-black relative  w-full h-screen min-h-screen overflow-auto">
      <div className=" relative min-h-full h-full p-5 rounded-lg text-center  w-full md:w-[80%] lg:w-[70%] mx-auto z-40">
        <img
          src="/back_icon.webp"
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
          src="/how_to_buy_bg.webp"
          className=" absolute inset-0 h-full w-full  "
        />

        <img
          src="/tokenomic_title.webp"
          className="absolute hidden md:block top-[17.8%] left-[30.7%] !w-[38.2%]  !h-[9.5%] "
        />

        <img
          src="/tokenomics_mobile_title.webp"
          className="absolute top-[17.8%] block md:hidden left-[30.7%] !w-[38.2%] !h-[9.5%] "
        />

        <div className=" absolute top-[36%] w-[90%] md:w-[95%]  mx-auto !h-[45%] overflow-auto ">
          <div className=" w-[60%] md:w-[60%]  mx-auto text-[#FFFFFFE5] font-bold">
            <div className="flex justify-center card">
              <img
                src="/tokenomics_body.webp"
                className="w-[180px] h-[180px] md:w-[580px] object-contain md:h-[240px] z-10 transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div className="text-center space-y-2 animate-slide-in">
              {/* Total Supply */}
              <div className="text-md md:text-4xl text-white  !font-black !font-titillium flex gap-2 items-center justify-center relative">
                <div data-text="SUPPLY:">SUPPLY:</div>
                <div className="glitch" data-text="1,000,000,000 ">
                  {" "}
                  1,000,000,000
                </div>
              </div>

              {/* Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 !mt-8">
                {/* Tax Box */}
                <div className="relative flex items-center justify-center border-2 border-[#E3B057] rounded-2xl bg-transparent  p-4 md:p-6 shadow-lg  transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="absolute -right-[15px] -top-[20px] text-orange-400 text-4xl font-bold">
                    <img src="/star.webp" />
                  </span>
                  <h2 className="text-white !font-black !font-titillium text-md md:text-xl  uppercase">
                    TAX 0/0
                  </h2>
                </div>

                {/* Fair Launch Box */}
                <div className="relative flex items-center justify-center border-2 border-[#E3B057] rounded-2xl bg-transparent   p-4 md:p-6    shadow-lg  transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="absolute -right-[15px] -top-[20px] text-orange-400 text-4xl font-bold">
                    <img src="/star.webp" />
                  </span>
                  <h2 className="text-white  !font-black !font-titillium text-md md:text-xl uppercase">
                    FAIR LAUNCH
                  </h2>
                </div>

                {/* LP Locked Box */}
                <div className="relative flex items-center justify-center border-2 border-[#E3B057] rounded-2xl bg-transparent  p-4 md:p-6   shadow-lg  transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="absolute -right-[15px] -top-[20px] text-orange-400 text-4xl font-bold">
                    <img src="/star.webp" />
                  </span>
                  <h2 className="text-white !font-black !font-titillium text-md md:text-xl  uppercase">
                    LOCKED LP
                  </h2>
                </div>
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
