import "./slider.scss";
import { useState, useEffect } from "react";

export default function Slider() {
  const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in NY",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/slide3.jpg",
    },
  ];

  const [sliderIndex, setSliderIndex] = useState(0);
  console.log(sliderIndex);
  console.log("l:" + data.length);

  let currentIndex = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= data.length - 1) {
        //setSliderIndex(currentIndex = 0)
        currentIndex = 0;
      } else currentIndex++;

      setSliderIndex(currentIndex);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider">
      <div className="textblock">
        <span className="text">{data[sliderIndex].title}</span>
        <button className="button">Order now</button>
      </div>
      <img className="images" src={data[sliderIndex].image} />
    </div>
  );
}
