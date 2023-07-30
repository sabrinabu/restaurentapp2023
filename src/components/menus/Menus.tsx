import "./menus.scss";
import { menu } from "../../data";
import Singlemenu from "../singlemenu/Singlemenu";

export default function Menus() {
  return (
    <div className="menus">
      <div className="container">
        {menu.map((data) => (
          <Singlemenu data={data} />
        ))}
      </div>
    </div>
  );
}
