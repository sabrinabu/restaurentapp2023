import "./scrollableslider.scss";
import { pizzas } from "../../data";
import Singleslide from "../singleslide/Singleslide";

export default function Scrollableslider() {
  return (
    <div className="scrollableslider">
      {pizzas.map((item) => (
        <Singleslide item={item} key={item.id} />
      ))}
    </div>
  );
}
