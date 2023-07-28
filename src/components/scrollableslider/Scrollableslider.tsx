import "./scrollableslider.scss";
import { pizzas } from "../../data";
import { useState } from "react";
import Singleslide from "../singleslide/Singleslide";

export default function Scrollableslider() {
  const [data, setdata] = useState(pizzas);
  
  return (
    <div className="scrollableslider">
      {data.map((item) => (
        <Singleslide item={item} key={item.id} />
      ))}
    </div>
  );
}
