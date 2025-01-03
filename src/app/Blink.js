import Head from "next/head";

const BlinkingPoint = ({ x, y, color = "white" }) => {
  const styles = {
    blinkingPoint: {
      position: "absolute",
      top: `${y}px`, // Use backticks for template literals
      left: `${x}px`, // Use backticks for template literals
      width: "6px",
      height: "6px",
      backgroundColor: color,
      borderRadius: "50%",
      zIndex: 1000,
    },
    expandingGlow: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "2px",
      height: "2px",
      borderRadius: "50%",
      backgroundColor: color,
      animation: "expandGlow 2s infinite",
    },
  };

  const keyframes = `
    @keyframes expandGlow {
      0% {
        width: 15px;
        height: 10px;
        opacity: 0.6;
      }
      50% {
        width: 65px;
        height: 60px;
        opacity: 0.2;
      }
      100% {
        width: 120px;
        height: 100px;
        opacity: 0;
      }
    }
  `;

  return (
    <div style={styles.blinkingPoint}>
      <style>{keyframes}</style>
      <div style={styles.expandingGlow} />
    </div>
  );
};

export default BlinkingPoint;
