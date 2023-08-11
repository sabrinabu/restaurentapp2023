import "./footer.scss";
import useStickyPart from "../../hooks/useStickyPart";

export default function Footer() {
  const { isSticky } = useStickyPart(100, 750);

  return (
    <div className={isSticky ? "footer" : "footer stickyFooter"}>
      <span className="left">Kaynat Online Shop</span>
      <span className="right">@ ALL RIGHTS RESERVED.</span>
    </div>
  );
}
