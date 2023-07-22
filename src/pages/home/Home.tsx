import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Scrollableslider from "../../components/scrollableslider/Scrollableslider";
import Slider from "../../components/slider/Slider";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <>
        <Banner />
        <Navbar />
        <Slider/>
        <Scrollableslider/>
      </>
    </div>
  );
}
