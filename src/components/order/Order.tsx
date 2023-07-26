import "./order.scss";

export default function Order({ item, rowtype }) {
  return (
    <div className="order">
      <div
        className="row"
        style={{
          fontWeight: rowtype == "headlines" ? "600" : "400",
          backgroundColor:
            item.id % 2 ? "rgb(235, 208, 202)" : "rgb(243, 228, 223)",
        }}
      >
        <span className="orderid">{item.id}</span>
        <span className="date">{item.date}</span>
        <span className="price">{item.price}</span>
        <span className="desc">{item.desc}</span>
        <span className="status">{item.status}</span>
      </div>
    </div>
  );
}
