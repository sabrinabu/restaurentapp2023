import { OrderItem } from "../../data";
import "./order.scss";

type orderprops = {
  order: OrderItem;
  rowtype: string;
};

export default function Order({ order, rowtype }: orderprops) {
  return (
    <div className="order">
      <div
        className="row"
        style={{
          fontWeight: rowtype == "headlines" ? "600" : "400",
          backgroundColor:
            Number(order.id) % 2 ? "rgb(235, 208, 202)" : "rgb(243, 228, 223)",
        }}
      >
        <span className="orderid">{order.id}</span>
        <span className="date">{order.date}</span>
        <span className="price">{order.price}</span>
        <span className="desc">{order.desc}</span>
        <span className="status">{order.status}</span>
      </div>
    </div>
  );
}
