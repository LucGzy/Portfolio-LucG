import { useEffect } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  useEffect(() => {
    const fadeInElement = document.getElementById("fadeInElement");

    // Check if the element exists before trying to manipulate it
    if (fadeInElement) {
      // Use setTimeout to add the class after 5000 milliseconds (5 seconds)
      setTimeout(() => {
        fadeInElement.classList.add("opacity-100");
      }, 3000);
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Spline
      id="fadeInElement"
      style={{ height: "400px" }}
      className="z-[2] h-[200px] pr-24 bp1:pr-0 opacity-0 transition-opacity ease-in duration-1000 reverse-invert"
      scene="https://prod.spline.design/VBSPx5CV7V6bdo3t/scene.splinecode"
    />
  );
}
