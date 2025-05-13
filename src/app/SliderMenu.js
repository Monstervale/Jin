"use client";

import Link from "next/link";
import React from "react";

const SliderMenu = ({ isOpen, onClose, playSound }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        backgroundColor: "#0C0404E5",
        color: "white",
        overflowX: "hidden",
        transition: "width 0.3s ease",
        zIndex: 100000000000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: isOpen && "4px solid #E3B057",
        borderTopRightRadius: "32px",
        borderBottomRightRadius: "32px",
      }}
      className={` ${
        isOpen ? "sm:w-[480px] w-[100%] md:p-[40px] p-[10px]" : "w-0"
      }`}
    >
      {/* Close Button */}
      <button
        style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          background: "none",
          color: "white",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        <img
          src="/close_icon.webp"
          alt="Close"
          style={{ width: "48px", height: "48px" }}
        />
      </button>

      {/* Menu Links */}
      <div style={{ marginTop: "40px" }}>
        {[
          { label: "HOME", href: "/" },
          { label: "ABOUT", href: "/about" },
          // { label: "PRESALE", href: "/presale" },
          { label: "HOW TO BUY", href: "/how-to-buy" },
          { label: "TOKENOMICS", href: "/tokenomics" },
          { label: "GAMES", href: "/games" },
          { label: "FAQ", href: "/faq" },
        ].map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="menu_link   !font-black !font-titillium !text-[20px] md:!text-[48px]"
            style={{
              fontSize: "36px",
              margin: "10px 0",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "color 0.3s ease, transform 0.3s ease",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              letterSpacing: "1px",
            }}
            onClick={(e) => {
              playSound();
              if (link.href === "/") {
                e.preventDefault();
                window.location.href = "/";
              }
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ff8a65";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
            }}
          >
            <img src="/star.webp" className="w-[48px] h-[48px] ml-4 mr-4" />
            {link.label}
          </Link>
        ))}
      </div>

      {/* Social Media Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginBottom: "20px",
          marginLeft: "20px",
          gap: "20px",
        }}
      >
        {[
          { href: "https://x.com/jinethvip", src: "/twitter.webp" },
          { href: "https://t.me/jinethvip", src: "/telegram.webp" },
        ].map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <img
              style={{ width: "48px", height: "48px", cursor: "pointer" }}
              src={icon.src}
              alt="Social Icon"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SliderMenu;
