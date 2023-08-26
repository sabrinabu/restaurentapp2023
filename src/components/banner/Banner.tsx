import "./banner.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanaguageselection } from "../../redux/utilityRedux";
import { useState } from "react";

export default function Banner() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const dispatch = useDispatch();
  const handleLanguageSelect = (selectedLanguage: string) => {
    if (selectedLanguage == "en") {
      i18n.changeLanguage("en-US");
      dispatch(setLanaguageselection(selectedLanguage));
      setLanguage(selectedLanguage);
    } else if (selectedLanguage == "de") {
      i18n.changeLanguage("de-DE");
      dispatch(setLanaguageselection(selectedLanguage));
      setLanguage(selectedLanguage);
    } else if (selectedLanguage == "bd") {
      i18n.changeLanguage("bd-BD");
      dispatch(setLanaguageselection(selectedLanguage));
      setLanguage(selectedLanguage);
    }
  };
  return (
    <div className="banner">
      <span className="heading">
        <span className="announcement">{t("announcement")}</span>
      </span>
      <select
        className="selectLanguage"
        value={language}
        onChange={(e) => handleLanguageSelect(e.target.value)}
      >
        <option value="en">en</option>
        <option value="de">de</option>
        <option value="bd">bd</option>
      </select>
    </div>
  );
}
