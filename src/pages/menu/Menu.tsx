import "./menu.scss";
import Menus from "../../components/menus/Menus";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Menu() {
  return (
    <div className="menu">
      <Banner />
      <Navbar/>

      <Menus />
      <Footer/>
    </div>
  );
}
