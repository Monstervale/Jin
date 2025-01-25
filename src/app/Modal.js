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

const Modal = ({ isOpen, onClose, Heading, Text }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!isOpen) return null;

  return (
    <div class="fixed inset-0 w-full h-full bg-black bg-opacity-80 backdrop-blur-sm z-50 flex justify-center items-center overflow-auto">
      <div class="bg-transparent p-5 rounded-lg text-center relative w-full md:w-4/5 h-full">
        <img
          src="/back.webp"
          alt="Close"
          className="absolute top-6 right-4  md:top-6 md:right-6 w-5 h-5 md:w-10 md:h-10 cursor-pointer"
          onClick={onClose}
        />
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase mb-8 tracking-wide shadow-sm font-sans">
          {Heading}
        </h1>

        <img
          src="/chinese_border.webp"
          alt="Decorative Border"
          className="w-full h-10 md:h-20 object-cover mb-8"
        />

        {Heading === "FAQs" && (
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`p-6 rounded-3xl border-2 border-orange-400 bg-orange-100/10 shadow-md transform transition-transform duration-300 cursor-pointer `}
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between gap-6 items-center text-lg md:text-xl font-bold text-white uppercase">
                  <span className=" text-left ">{faq.question}</span>
                  <span
                    className={`text-orange-400 text-3xl font-bold transform transition-transform duration-300 ${
                      expandedIndex === index
                        ? "rotate-180 scale-125"
                        : "scale-100"
                    }`}
                  >
                    ★
                  </span>
                </div>
                <div
                  className={`mt-4 text-white text-sm md:text-base text-left overflow-hidden transition-all duration-500 ease-in-out ${
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
        )}
        {Heading === "How to Buy?" && (
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-6 p-6 border-2 border-orange-400 bg-orange-100/10 shadow-lg rounded-2xl`}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 bg-orange-400 text-white font-bold w-16 h-16 flex justify-center items-center rounded-full text-2xl shadow-md">
                  {step.number}
                </div>
                {/* Step Content */}
                <div
                  className={`${
                    index % 2 !== 0 ? "text-right" : "text-left"
                  } flex-1`}
                >
                  <h2 className="text-orange-400 text-2xl font-extrabold uppercase mb-2">
                    {step.title}
                  </h2>
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {Heading === "Games" && (
          <div className="space-y-6">
            <p className="text-white text-lg md:text-xl text-left leading-relaxed">
              Step into{" "}
              <span className="font-bold text-orange-400">Jin’s temple</span>{" "}
              and take on exciting games for a chance to earn{" "}
              <span className="italic">exclusive tokens</span> at launch. Solve
              intricate puzzles, face daring challenges, and unlock hidden
              treasures as you journey through this immersive experience. Each
              step brings you closer to{" "}
              <span className="font-bold text-orange-400">rewards</span> and a
              wealth of fortune. Are you ready to claim your destiny?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {[
                "/game_1.webp",
                "/game_2.webp",
                "/game_3.webp",
                "/game_4.webp",
                "/game_5.webp",
                "/game_6_b.webp",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Game ${index + 1}`}
                  className="w-full h-56 rounded-[45px] object-fill shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                />
              ))}
            </div>
          </div>
        )}

        {Heading === "Presale" && (
          <p className="text-white text-left text-sm md:text-base leading-loose"></p>
        )}

        {Heading === "Tokenomics" && (
          <div className="text-center space-y-8">
            {/* Total Supply */}
            <div className="text-xl md:text-2xl font-bold text-white">
              TOTAL SUPPLY:{" "}
              <span className="relative text-red-500 glitch-effect">
                [REDACTED]
              </span>
            </div>

            {/* Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 !mt-12">
              {/* Tax Box */}
              <div className="relative flex items-center justify-center border-4 border-orange-400 rounded-2xl bg-black/50 p-6 md:p-12 shadow-lg">
                <span className="absolute left-[-15px] -top-[20px] text-orange-400 text-4xl font-bold">
                  ★
                </span>
                <h2 className="text-white text-lg md:text-2xl font-bold font-sans uppercase">
                  Tax 0/0
                </h2>
              </div>

              {/* Fair Launch Box */}
              <div className="relative flex items-center justify-center border-4 border-blue-400 rounded-2xl bg-black/50 p-6 md:p-12  shadow-lg">
                <span className="absolute left-[-15px] -top-[20px] text-blue-400 text-4xl font-bold">
                  ★
                </span>
                <h2 className="text-white text-lg md:text-2xl font-bold font-sans uppercase">
                  Fair Launch
                </h2>
              </div>

              {/* LP Locked Box */}
              <div className="relative flex items-center justify-center border-4 border-purple-400 rounded-2xl bg-black/50 p-6 md:p-12 shadow-lg">
                <span className="absolute left-[-15px] -top-[20px] text-purple-400 text-4xl font-bold">
                  ★
                </span>
                <h2 className="text-white text-lg md:text-2xl font-bold font-sans uppercase">
                  100% of Tokens in the LP
                </h2>
              </div>
            </div>
          </div>
        )}

        {Heading === "About Us" && (
          <div className="text-white text-left text-sm md:text-base leading-relaxed space-y-4">
            <p>
              For twelve long years,{" "}
              <span className="font-bold text-orange-400">Jin</span>, whose name
              means <span className="italic">"gold"</span> in Chinese, has
              coiled in his hidden temple, silently observing the world and
              waiting for the{" "}
              <span className="font-semibold">"Year of the Snake"</span>—a time
              destined for wisdom, transformation, and fortune.
            </p>
            <p>
              As a master of patience and strategy, Jin has shaped the tides of
              the crypto world, aligning the bull run with this auspicious year.
              He stands as the embodiment of{" "}
              <span className="font-bold text-orange-400">luck</span> and{" "}
              <span className="font-bold text-orange-400">prosperity</span>,
              filling his temple with treasures of wealth and enlightenment.
            </p>
            <p>
              Now, Jin is ready to bless those who seek their fortune. Will you
              embrace Jin’s power and claim your place in this era of boundless
              prosperity, or will you let this once-in-a-lifetime opportunity
              slip away?
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
