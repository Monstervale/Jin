"use client";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import "./page.css";
import Modal from "./Modal";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import BlinkingPoint from "./Blink";
import GlowingEffect from "./GlowingEffect";
import SliderMenu from "./SliderMenu";
import { useRouter } from "next/navigation";

export function HoverImage({}) {
  const [hoverText, setHoverText] = useState("");
  const [showSnake, setShowSnake] = useState(false);
  const [showBookStroke, setShowBookStroke] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showBoxStroke, setShowBoxStroke] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [width, setWidth] = useState(0);
  const [snakestroke, setsnakestroke] = useState(false);
  const [scrollstroke, setscrollstroke] = useState(false);
  const [BlackSnakeReturnStroke, setBlackSnakeStrokeReturn] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const newAudio = new Audio("/assets/sounds/background.mp3");
    newAudio.loop = true;
    setAudio(newAudio);

    return () => {
      if (newAudio) {
        newAudio.pause();
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        const scrollWidth = document.body.scrollWidth;
        const clientWidth =
          document.documentElement.clientWidth || window.innerWidth;

        const centerScrollPosition = (scrollWidth - clientWidth) / 2;

        document.body.scrollLeft = centerScrollPosition;
        document.documentElement.scrollLeft = centerScrollPosition;
      }, 0);
    }
  }, []);

  const checkScrollAvailability = () => {
    const scrollLeft =
      document.body.scrollLeft || document.documentElement.scrollLeft;
    const scrollWidth = document.body.scrollWidth;
    const clientWidth = document.documentElement.clientWidth;

    const canScrollLeft = scrollLeft > 0;
    const canScrollRight = scrollLeft + clientWidth < scrollWidth - 1;

    // Only update state if values have changed
    setCanScrollLeft((prev) => (prev !== canScrollLeft ? canScrollLeft : prev));
    setCanScrollRight((prev) =>
      prev !== canScrollRight ? canScrollRight : prev
    );
  };

  useEffect(() => {
    const scrollElement = document.body;

    if (window.innerWidth <= 768) {
      checkScrollAvailability();

      const handleScroll = () => {
        checkScrollAvailability();
      };

      scrollElement.addEventListener("scroll", handleScroll);

      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   if (!isLoading) toggleSound();
  // }, [isLoading]);

  const playSound = () => {
    const audio = new Audio("/assets/sounds/gong_sound.mp3");
    audio.volume = 1.0;

    audio
      .play()
      .then(() => {
        console.log("Sound is playing");

        setTimeout(() => {
          let fadeOutInterval = setInterval(() => {
            if (audio.volume > 0.1) {
              audio.volume = Math.max(0, audio.volume - 0.1);
            } else {
              clearInterval(fadeOutInterval);
              audio.pause();
              audio.currentTime = 0;
              console.log("Sound stopped after fading out");
            }
          }, 200);
        }, 2000);
      })
      .catch((error) => console.error("Error playing sound:", error));
  };

  if (isLoading) {
    return (
      <div className="preloader">
        <div className="">
          <div className="loader-container">
            <img
              src={"/Snake-Game-4.gif"}
              alt="Close"
              style={{
                height: "220px",
                cursor: "pointer",
              }}
            />
            <h1>ENTERING THE TEMPLE</h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 1,
        cursor: "url(/assets/fire.png), auto",
      }}
    >
      {/* Sound Icons */}
      <div
        style={{
          position: "fixed",
          top: "30px",
          left: "40px",
          cursor: "pointer",
          zIndex: 10000000,
          width: "50px",
          height: "50px",
          background: "white",
          borderRadius: "50%",
          padding: "10px",
        }}
        onClick={toggleSound}
      >
        <img
          src={isPlaying ? "/volume.png" : "/volume-mute.png"}
          alt={isPlaying ? "Sound On" : "Sound Off"}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      {/* Humberger */}
      <div
        style={{
          position: "fixed",
          top: "30px",
          right: "40px",
          cursor: "pointer",
          zIndex: 10000000,
          width: "50px",
          height: "50px",
        }}
        onClick={toggleMenu}
      >
        <img
          src={"/menu.png"}
          alt={"Menu"}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      {/* Slider Menu */}
      <SliderMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        playSound={playSound}
      />
      <div
        className={`hidden lg:block absolute top-[50%] z-[999999999999999] transition-all duration-500 ease-in-out ${
          isMenuOpen ? "left-[400px]" : "-left-[250px]"
        }`}
      >
        <img
          src="/sidebar_head.png"
          className="hidden lg:block w-[230px] h-[340px] transform transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Left Arrow */}
      {canScrollLeft && (
        <div
          style={{
            position: "fixed",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1000000,
          }}
        >
          <img
            src={"/assets/arrow.png"}
            alt="Close"
            style={{
              height: "40px",
              width: "40px",
              rotate: "180deg",
            }}
          />
        </div>
      )}
      {/* Right Arrow */}
      {canScrollRight && (
        <div
          style={{
            position: "fixed",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1000000,
          }}
        >
          <img
            src={"/assets/arrow.png"}
            alt="Close"
            style={{
              height: "40px",
              width: "40px",

              // cursor: "pointer",
            }}
          />
        </div>
      )}

      <div
        style={{
          position: "fixed",
          bottom: "4%",
          left: "4%",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          zIndex: 10000000,
        }}
      >
        <a className="" href="https://twitter.com" target="_blank">
          <img
            style={{ width: "40px", height: "40px" }}
            className=""
            src="/twitter.png"
            alt="Twitter"
          ></img>
        </a>
        <a className="" href="https://telegram.com" target="_blank">
          <img
            style={{ width: "40px", height: "40px" }}
            src="/telegram.png"
            alt="Twitter"
          ></img>
        </a>
      </div>
      <div style={{ position: "absolute", top: "72%", left: "32.5%" }}>
        <img
          src={"/the-sand-timer.gif"}
          style={{
            height: "80px",
            width: "80px",
            cursor: "pointer",
          }}
        />
      </div>
      {/* Snake Part */}
      {/* Snake Animation */}
      <div
        style={{
          position: "absolute",
          top: "52%",
          left: "54%",
          transform: "translate(-50%, -50%)",
          width: "22%",
          cursor: "url(/assets/fire.png), auto",
          borderRadius: "15px",
          transition: "all 0.3s ease-in-out",
          zIndex: 2,
          opacity: showSnake ? 0 : 1,
        }}
        onClick={() => {
          playSound();
          router.push("/about");
        }}
        onMouseOver={() => {
          setHoverText("ABOUT");
          setShowSnake(true);
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowSnake(false);
        }}
      >
        <img
          className="snake"
          src="/Final-Snake-2.gif"
          alt="Stroke Snake PNG"
          style={{
            width: "65%",
            height: "65%",
            display: "block",
            borderRadius: "15px",
          }}
        />
      </div>
      {/* Stroke Snake PNG */}
      <img
        className="snake"
        src="/assets/strokeSnake.png"
        alt="Stroke Snake PNG"
        style={{
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "13%",
          borderRadius: "15px",
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF
          opacity: showSnake ? 1 : 0,
        }}
      />
      {/* TABLES */}

      {/* Remove table */}
      {/* <img
        className="table"
        src="/assets/table.png"
        alt="Table"
        style={{
          position: "absolute",
          top: "67%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: width <= 768 ? "0%" : "20%",
          zIndex: 5,
        }}
      /> */}
      {/* Book Part */}
      {/* Book Animation */}
      <div
        className="responsive-div-book"
        style={{
          position: "absolute",
          top: "55.5%",
          left: "27%",
          transform: "translate(-50%, -50%)",
          width: width <= 768 ? "14%" : "14%",
          zIndex: 7,
          transition: "all 0.3s ease-in-out",
          opacity: showBookStroke ? 0 : 1,
        }}
        onClick={() => {
          playSound();
          router.push("/how-to-buy");
        }}
        onMouseOver={() => {
          setHoverText("HOW TO BUY");
          setShowBookStroke(true);
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowBookStroke(false);
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Book.json")}
          loop={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          width: "8%",
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="white" />
      </div>
      {/* ALMARI */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          width: "8%",
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="white" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "56%",
          left: "54%",
          transform: "translate(-50%, -50%)",
          width: "8%",
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint />
      </div>
      <div
        style={{
          position: "absolute",
          top: "73%",
          left: "54%",
          transform: "translate(-50%, -50%)",
          width: "8%",
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="white" />
      </div>
      {/* BlackSnake */}
      <div
        style={{
          position: "absolute",
          top: "87%",
          left: "54%",
          transform: "translate(-50%, -50%)",
          width: "8%",
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="white" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "73%",
          left: "83%",
          transform: "translate(-50%, -50%)",
          width: "8%",
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="white" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "31.5%",
          transform: "translate(-50%, -50%)",
          width: "8%",
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <GlowingEffect />
      </div>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "8%",
          transform: "translate(-50%, -50%)",
          width: "8%",
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <GlowingEffect />
      </div>

      {/* Book Stroke PNG */}
      <img
        src="/assets/bookStroke.png"
        alt="Book Stroke PNG"
        style={{
          position: "absolute",
          top: "53%",
          left: "27%",
          transform: "translate(-50%, -50%)",
          width: "11%",
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF
          opacity: showBookStroke ? 1 : 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "81.5%",
          right: "4%",
          transform: "translate(-50%, -50%)",
          width: "17%",
          zIndex: 3,
          transition: "all 0.3s ease-in-out",
          opacity: showBoxStroke ? 0 : 1,
        }}
        onClick={() => {
          playSound();
          router.push("/tokenomics");
        }}
        onMouseOver={() => {
          setHoverText("TOKENOMICS");
          setShowBoxStroke(true);
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowBoxStroke(false);
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Treasure.json")}
          loop={true}
        />
      </div>
      <img
        src="/assets/sandookStroke.png"
        alt="Book Stroke PNG"
        style={{
          position: "absolute",
          top: "80.5%",
          right: "4%",
          transform: "translate(-50%, -50%)",
          width: "17%",
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF
          opacity: showBoxStroke ? 1 : 0,
        }}
      />
      {/* ALMARI */}
      <div
        style={{
          height: "55%",
          width: "12%",
          position: "absolute",
          top: "20%",
          left: "8%",
          zIndex: 1,
        }}
        onMouseOver={() => {
          setHoverText("FAQ's");
          setsnakestroke(true);
        }}
        onMouseOut={() => {
          setHoverText("");
          setsnakestroke(false);
        }}
        onClick={() => {
          playSound();
          router.push("/faq");
        }}
      ></div>
      <img
        src="/assets/BlackSnake.png"
        alt="Almari PNG"
        style={{
          position: "absolute",
          top: "49%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          transition: "all 0.3s ease-in-out",
          height: "100%",
          opacity: snakestroke ? 1 : 0,
        }}
      />
      {/* Table */}
      <div
        style={{
          height: "14%",
          width: "19%",
          position: "absolute",
          top: "60%",
          left: "40%",
          zIndex: 9,
        }}
    
      ></div>
      <div
        style={{
          position: "absolute",
          top: width <= 768 ? "15%" : "12%",
          right: width <= 768 ? "-35%" : "-18%",
          transform: "translate(-50%, -50%)",
          width: width <= 768 ? "80%" : "70%",
          zIndex: 999,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <img
          src="/light.gif"
          alt="Almari PNG"
          style={{
            transition: "all 0.3s ease-in-out",
            width: width <= 768 ? "80%" : "100%",
            height: "100%",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          height: "20.5%",
          width: "20%",
          top: "77%",
          left: "40%",
          zIndex: 13,
        }}
        onClick={() => {
          playSound();
          router.push("/games");
        }}
        onMouseOver={() => {
          setHoverText("GAMES");
          setBlackSnakeStrokeReturn(true); //
        }}
        onMouseOut={() => {
          setHoverText("");
          setBlackSnakeStrokeReturn(false);
        }}
      ></div>
      <img
        src="/assets/BlackSnake2.png"
        alt="Almari PNG"
        style={{
          position: "absolute",
          top: "86.2%",
          left: "50.1%",
          transform: "translate(-50%, -50%)",
          width: "21.9%",
          transition: "all 0.3s ease-in-out",
          height: "34%",
          opacity: BlackSnakeReturnStroke ? 1 : 0,
          zIndex: 11,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "53.0%",
          right: "-2%",
          transform: "translate(-50%, -50%)",
          width: "7%",
          zIndex: 3,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Smoke.json")}
          loop={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "47.2%",
          left: "36.7%",
          transform: "translate(-50%, -50%)",
          width: "12%",
          zIndex: 3,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Fire.json")}
          loop={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "47.1%",
          right: "24.7%",
          transform: "translate(-50%, -50%)",
          width: "12%",
          zIndex: 3,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Fire.json")}
          loop={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "70.2%",
          left: "5.1%",
          transform: "translate(-50%, -50%)",
          width: "10.5%",
          zIndex: 3,
          transition: "all 0.1s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Fire_ball.json")}
          loop={true}
        />
      </div>
      {/* Electricity Part */}
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "88%",
          transform: "translate(-50%, -50%) rotate(45deg)",
          width: width <= 768 ? "6%" : "6.8%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/lightning.json")}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
      {/* Bubble Bottles */}
      <div
        style={{
          position: "absolute",
          top: "57.2%",
          left: "3.7%",
          width: "100px",
          height: "105px",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
          }}
        />
        <Lottie
          animationData={require("../../public/assets/Json/Liquid.json")}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
      {/* New Div 1 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "64%",
          width: "10%",
          height: "35%",
          borderRadius: "10px",

          zIndex: 5,
          transition: "all 0.3s ease-in-out",
        }}
      ></div>
      <img
        src="/assets/gallery_hover.png"
        style={{
          position: "absolute",
          top: "67%",
          left: "50%",
          opacity: showGallery ? 1 : 0,
          transform: "translate(-50%, -67%)",
          width: "100%",
          zIndex: showGallery ? 5 : 0,
        }}
      />
{/* <div
        style={{
          position: "absolute",
          top: "63%",
          left: "45.5%",
          opacity: 1,
          color: "black",

          zIndex: 1,
        }}
        className="!font-black left  md:left-[45.5] !font-titillium text-[12px] md:text-[16px] animate-slide-in "
      >
        <div className=" relative">
          <span className=" ml-[19px]"> $JIN PRESALE</span>
          <br />
          <span className=" !-ml-3"> USDT RAISED: $200,000</span>
          <br></br>TIME LEFT: 30 DAYS
        </div>
      </div> */}
      {/* New Div 2 */}
      <div
        style={{
          position: "absolute",
          top: "75%",
          left: "70%",
          width: "15%",
          height: "20%",
          borderRadius: "10px",
          zIndex: 2,
          transition: "all 0.3s ease-in-out",
        }}
        onClick={() => {
          playSound();
          router.push("/tokenomics");
        }}
        onMouseOver={() => setHoverText("TOKENOMICS")}
        onMouseOut={() => setHoverText("")}
      ></div>
      {/* BOX */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "4.5%",
          width: width <= 768 ? "130px" : "140px",
          height: width <= 768 ? "130px" : "140px",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/ice 2.json")}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
      {/* Centered Hover Text */}
      {hoverText === "ABOUT" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t1.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}
      {hoverText === "FAQ's" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t3.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}
      {hoverText === "TOKENOMICS" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t4.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}
      {hoverText === "HOW TO BUY" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t5.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}
      {hoverText === "GAMES" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t6.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </div>
  );
}
//PRESALE
//FAQ's TOKENOMICS
export default function Home() {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <HoverImage />
        </div>
      </div>
    </>
  );
}
