"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const router = useRouter();
  // Define an array of objects for games
  const games = [
    {
      src: "/game_1_b.webp",
      title: "Snake",
      status: "playNow",
    },
    {
      src: "/game_2_b.webp",
      title: "Slither Surfer",
      status: "comingSoon",
    },
    {
      src: "/game_3_b.webp",
      title: "Snakes and Ladders",
      status: "comingSoon",
    },
    {
      src: "/game_4_b.webp",
      title: "Jin's Riddle Challenge",
      status: "comingSoon",
    },
    {
      src: "/game_5_b.webp",
      title: "Jin's Puzzle Temple",
      status: "comingSoon",
    },
    {
      src: "/game_6_b.webp",
      title: "Jin's Battle Arena",
      status: "comingSoon",
    },
  ];

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
          src="/games_title.webp"
          className="absolute hidden md:block top-[17.8%] left-[30.7%] !w-[38.2%]  !h-[9.5%]"
        />

        <img
          src="/game_mobile_title.webp"
          className="absolute top-[17.8%] block md:hidden left-[30.7%] !w-[38.2%] !h-[9.5%] "
        />

        <div className=" absolute top-[37%] w-[90%] md:w-[97%]  mx-auto !h-[45%] overflow-auto ">
          <div className=" w-[60%] md:w-[65%]  mx-auto ">
            <p className=" text-center text-[14px]  md:!text-[18px] !font-bold !font-titillium  max-w-[650px] mx-auto  animate-fade-in ">
              Step into Jin’s temple and take on exciting games for a chance to
              earn exclusive tokens at launch. Solve intricate puzzles, face
              daring challenges, and unlock hidden treasures as you journey
              through this immersive experience. Each step brings you closer to
              rewards and a wealth of fortune. Are you ready to claim your
              destiny?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {games.map((game, index) => {
                return (
                  <div className="relative card" key={index}>
                    <img
                      src={game.src}
                      alt={game.title}
                      className="w-[300px] h-[228px] rounded-[25px] object-fill shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                    />
                    <div className="text-[20px] font-black !font-titillium mt-2 whitespace-nowrap">
                      {game.title}
                    </div>
                    {game.status === "comingSoon" ? (
                      <button className="text-[#F59600] border-[1px] rounded-[8px] border-[#E3B057] border-solid px-1 hover:bg-[#E3B057] hover:text-white">
                        Coming Soon
                      </button>
                    ) : (
                      <button
                        className="text-[#F59600] border-[1px] rounded-[8px] border-[#E3B057] border-solid px-1 hover:bg-[#E3B057] hover:text-white"
                        onClick={() => router.push(`/play/${game.title}`)} // Example navigation for Play Now
                      >
                        Play Now
                      </button>
                    )}
                    <div className="absolute -right-[10px] -top-[10px]">
                      <img src="/star.webp" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="inner-container-sub !absolute !inset-0 z-10"></div>
      <div className=" !absolute !inset-0 bg-[#0C0404CC] z-20"></div>
    </div>
  );
}
