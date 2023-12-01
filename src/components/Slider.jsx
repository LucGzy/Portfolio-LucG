import { useState, useEffect } from "react";

export default function Slider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log(images);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the index to the next image in the array
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="flex h-[50%]">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="h-[500px] rounded-md"
      />
    </div>
  );
}
