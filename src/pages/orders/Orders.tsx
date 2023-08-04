import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Order from "../../components/order/Order";
import "./orders.scss";
import { orders } from "../../data";

export default function Orders() {
  return (
    <div className="orders">
      <Banner />
      <Navbar />
      <div className="wrapper">
        <div className="innerwrapper">
          <Order
            order={{
              id: "Order ID",
              date: "Date",
              price: "Price",
              desc: "Description",
              status: "Status",
            }}
            rowtype={"headlines"}
          />
          {orders.map((order) => (
            <Order order={order} rowtype={"row"} key={order.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
