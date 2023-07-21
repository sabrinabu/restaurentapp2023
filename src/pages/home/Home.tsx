import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <>
        <Banner />
        <Navbar />
        <Slider/>
      </>
    </div>
  );
}
