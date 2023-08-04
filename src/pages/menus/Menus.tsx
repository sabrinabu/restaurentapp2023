import "./menus.scss";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { menu } from "../../data";
import Singlemenu from "../../components/singlemenu/Singlemenu";

export default function Menu() {
  return (
    <div className="menu">
      <Banner />
      <Navbar />
      <div className="menus">
        <div className="container">
          {menu.map((data) => (
            <Singlemenu data={data} key={data.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
