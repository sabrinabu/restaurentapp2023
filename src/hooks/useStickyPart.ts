import { useState } from "react";

type StickyInfo = {
  isSticky: boolean;
};

export default function useStickyPart(
  heightLimit: number,
  widthLimit: number
): StickyInfo {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const setStickyPart = () => {
    if (window.scrollY >= heightLimit && window.innerWidth > widthLimit) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  window.addEventListener("scroll", setStickyPart);

  return { isSticky };
}
