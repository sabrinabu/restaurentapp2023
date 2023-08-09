import useStickyPart from "../../hooks/useStickyPart";
import "./footer.scss";

export default function Footer() {
  const { isSticky } = useStickyPart(100, 750);
  return (
    <div className={isSticky ? "footer stickyFooter" : "footer"}>
      <span className="left">Kaynat Online Shop</span>
      <span className="right">@ ALL RIGHTS RESERVED.</span>
    </div>
  );
}
