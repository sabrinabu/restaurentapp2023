import "./menus.scss";
import { menu } from "../../data";
import { useState } from "react";
import Singlemenu from "../singlemenu/Singlemenu";

export default function Menus() {
  const [item, setItems] = useState(menu);
  //console.log(item)

  return (
    <div className="menus">
      <div className="container">
        {item.map((data) => (
          <Singlemenu data={data} />
        ))}
      </div>
    </div>
  );
}
