import { ChangeEvent } from "react";
import i18n from "../../translation/i18n";

export const LanguageSwitcher = () => {
  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header>
      <select onChange={changeLanguage} style={{ fontSize: "20px" }}>
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
        <option value="ru">Русский язык</option>
      </select>
    </header>
  );
};
