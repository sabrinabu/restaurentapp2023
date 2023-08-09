import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Wishitem from "../../components/wishitem/Wishitem";
import { useAppSelector } from "../../redux/store";
import "./wishlist.scss";

export default function Wishlist() {
  const wishlist = useAppSelector((state) => state.wish);

  console.log(wishlist);
  return (
    <div className="wishlist">
      <Banner />
      <Navbar />
      <div className="wrapper">
        <div className="wishItems">
          {wishlist.wishItems.map((wishItem) => (
            <Wishitem wishItem={wishItem}  key={wishItem.id}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
