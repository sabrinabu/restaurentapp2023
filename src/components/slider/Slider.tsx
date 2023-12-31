import "./slider.scss";
import { useState, useEffect } from "react";

export default function Slider() {
  type SlidingData = {
    id: number;
    title: string;
    image: string;
  };

  const data: SlidingData[] = [
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

  const [sliderIndex, setSliderIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((v) => (v >= data.length - 1 ? 0 : v + 1));
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [data.length]);

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
