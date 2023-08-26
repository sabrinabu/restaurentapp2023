import { useTranslation } from "react-i18next";
import "./banner.scss";

export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="banner">
      <span className="heading">{t("announcement")}</span>
    </div>
  );
}
