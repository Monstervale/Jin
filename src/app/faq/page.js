"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const faqData = [
  {
    question: "What is $JIN?",
    answer:
      "$JIN is a cryptocurrency token inspired by the wisdom, luck, and cunning of Jin the Snake, representing the Year of the Snake in the Chinese zodiac. It’s designed to bring fortune to its holders through a combination of utility, games, and rewards.",
  },
  {
    question: "What Blockchain is $JIN on?",
    answer: "$JIN is built on the Ethereum blockchain.",
  },
  {
    question: "Is there a Presale?",
    answer: "Detailed instructions are available in the Presale section.",
  },
  {
    question: "How do I buy the Presale?",
    answer: "Detailed instructions are available in the How to Buy section.",
  },
  {
    question: "What makes $JIN unique?",
    answer:
      "$JIN is not just a token - it’s an ecosystem. From interactive Jin-themed games to exclusive token airdrops, $JIN combines community, fun, and utility. It also symbolizes the Year of the Snake, aligning with themes of wisdom and fortune.",
  },
];

export default function page() {
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
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
          src="/faq_title.png"
          className="absolute hidden md:block top-[17.8%] left-[30.7%] !w-[38.2%]  !h-[9.5%]  "
        />

        <img
          src="/faq_mobile_title.png"
          className="absolute top-[17.8%] block md:hidden left-[30.7%] !w-[38.2%] !h-[9.5%]  "
        />

        <div className=" absolute top-[37%] w-[90%] md:w-[95%]  mx-auto !h-[50%] overflow-auto ">
          <div className=" w-[60%] md:w-[60%] !mt-4  mx-auto text-[#FFFFFFE5] font-bold">
            <div className="space-y-2 md:space-y-4">
              {faqData.map((faq, index) => (
                <div
                  className={`p-3 md:p-6 rounded-[10px] hover:scale-[1.05] md:rounded-[20px] border-[3px] border-[#E3B057] bg-orange-100/10 shadow-md transform transition-transform duration-500 cursor-pointer 
                  } animate-slide-in`}
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex justify-between gap-6 items-center text-lg md:text-xl font-bold text-white uppercase">
                    <span className="text-[14px] md:text-[28px] text-left !font-black !font-titillium">
                      {faq.question}
                    </span>
                    <span
                      className={`text-[20px] font-normal text-[#E9E9EA] transform transition-transform duration-300 ${
                        expandedIndex === index
                          ? "rotate-180 scale-110"
                          : "scale-100"
                      }`}
                    >
                      <img src="/star.png" className="w-[30px] h-[30px]" />
                    </span>
                  </div>
                  <div
                    className={`${
                      expandedIndex === index && "mt-4 "
                    } text-white text-sm md:text-base text-left overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
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
