import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Offerproduct from "../../components/offerproduct/Offerproduct";
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
        <Offerproduct/>
      </>
    </div>
  );
}
