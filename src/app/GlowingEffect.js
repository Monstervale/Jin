import React from "react";

export default function GlowingEffect({ color = "29, 65, 245" }) {
  const styles = {
    glowingDiv: {
      width: "0px", // No visible box initially
      height: "0px", // No visible box initially
      borderRadius: "80%", // Makes the glow circular
      boxShadow: `0 0 37px 37px rgba(${color})`, // Glow effect
      animation: "zoomInZoomOut 3s ease-in-out infinite", // Apply zoom-in/zoom-out animation
    },
  };

  const keyframes = `
    @keyframes zoomInZoomOut {
      0%, 100% {
        transform: scale(1); /* Normal size */
      }
      50% {
        transform: scale(1.5); /* Zoomed in */
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.glowingDiv}></div>
    </>
  );
}
