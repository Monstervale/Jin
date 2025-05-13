"use client";
import {useRouter} from "next/navigation";
import React from "react";
import {howToBuySteps} from "@/lib/constants";

const steps = [
    {
        number: "1",
        title: "SET UP A CRYPTO WALLET",
        description:
            "To buy $JIN, you'll need an Ethereum-compatible wallet like MetaMask, Trust Wallet, or Coinbase Wallet. Download the wallet app, create your account, and securely save your recovery phrase.",
    },
    {
        number: "2",
        title: "FUND YOUR WALLET WITH ETHEREUM (ETH)",
        description:
            "You'll need ETH to buy $JIN and to cover gas fees. Purchase ETH on exchanges such as Binance or Coinbase, and transfer it to your wallet using your wallet address.",
    },
    {
        number: "3",
        title: "BUY $JIN ON A DECENTRALIZED EXCHANGE (DEX)",
        description:
            "With ETH in your wallet, connect to a DEX like Uniswap. Search for $JIN using its contract address to ensure accuracy. Enter the amount of ETH you want to swap, confirm the transaction, and $JIN will be sent to your wallet after paying the gas fees.",
    },
    {
        number: "4",
        title: "ADD $JIN TO YOUR WALLET",
        description:
            "To see your $JIN tokens in your wallet, simply add the $JIN contract address to your wallet. Once added, your $JIN tokens will appear. Welcome aboard!",
    },
];

export default function page() {
    const router = useRouter();
    return (
        <div class="bg-black relative w-full h-screen min-h-screen overflow-auto">
            <div
                className=" relative min-h-full h-full p-5 rounded-lg text-center  w-full md:w-[80%] lg:w-[70%] mx-auto z-40">
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
                    src="/how_to_buy_title.webp"
                    className="absolute hidden md:block top-[17.8%] left-[30.7%] !w-[38.2%]  !h-[9.5%]"
                />

                <img
                    src="/how_to_buy_mobile_title.webp"
                    className="absolute top-[17.8%] block md:hidden left-[30.7%] !w-[38.2%] !h-[9.5%] "
                />

                <div
                    className="absolute top-[37%] w-[90%] md:w-[97%] !flex !justify-center  items-center  mx-auto !h-[45%] overflow-auto ">
                    <div className=" w-[60%] md:w-[65%]    mx-auto  ">
                        {/* <div className=" flex flex-col gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row w-full sm:w-[350px] xl:w-[600px] ${
                    index % 2 !== 0 ? "md:self-end" : ""
                  } items-center gap-6 p-6 border-2 border-[#E3B057] bg-transparent shadow-lg rounded-[20px]`}
                >
                  <img
                    src="/step_1.webp"
                    className={`w-[140px] h-[140px] hidden md:block absolute ${
                      index % 2 !== 0
                        ? " top-[50%] left-0 -translate-y-[50%] -translate-x-[50%]"
                        : " top-[50%] right-0 -translate-y-[50%] translate-x-[50%]"
                    }`}
                  />

                  <img
                    src="/star.webp"
                    className={`w-[48px] h-[48px] absolute ${
                      index % 2 === 0 ? " -top-6 left-0" : " -top-6 right-0"
                    }`}
                  />

                  <div
                    className={`text-center md:text-left ${
                      index % 2 !== 0 ? "md:text-right md:ml-10" : " md:mr-10"
                    }`}
                  >
                    <h2 className="text-white text-2xl !font-black !font-titillium  uppercase mb-4">
                      {step.title}
                    </h2>
                    <p className="text-white text-base md:text-lg leading-relaxed ">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
                        <div className="flex justify-center gap-0 card mt-[780px] md:mt-[300px]">
                            <img
                                src="/pile_in_coin.webp"
                                className="w-[180px] h-[180px] md:w-[580px] object-contain md:h-[280px] z-10 transition-transform duration-300 transform hover:scale-105 "
                            />
                        </div>
                        <div className=" animate-slide-in text-[24px] font-black !font-titillium md:text-[54px] pb-4">
                            How to Buy $JIN
                        </div>

                        <div className={"flex flex-col items-center !font-titillium  animate-slide-in font-semibold justify-center gap-4 px-1 md:px-10"}>
                            {howToBuySteps.map((steps) => (
                                <div
                                    key={steps.id}
                                    className={"border-[#E3B057] border-solid border-[1px] rounded-[8px] px-2 py-2 text-[#E3B057] bg-[#0C0404CC]/50 text-center"}>
                                    {steps.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="inner-container-sub !absolute !inset-0 z-10"></div>
            <div className=" !absolute !inset-0 bg-[#0C0404CC] z-20"></div>
        </div>
    );
}
