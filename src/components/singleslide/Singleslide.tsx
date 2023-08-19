import { Product } from "../../data";
import "./singleslide.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type singleSlideProps = {
  item: Product;
};

export default function Singleslide({ item }: singleSlideProps) {
  return (
    <div className="singleslide">
      <LazyLoadImage effect="blur" src={item.img} className="img" />
      <span className="title">{item.title}</span>
      <div className="deccription">{item.desc}</div>
      <span className="price">{item.price}€</span>
      <button className="button">Add to cart</button>
    </div>
  );
}
