import { useTranslation } from "react-i18next";

export const WordsList = () => {
  const { t } = useTranslation();
  return (
    <ul>
      <li>{t("list.item-1")}</li>
      <li>{t("list.item-2")}</li>
      <li>{t("list.item-3")}</li>
      <li>{t("list.item-4")}</li>
    </ul>
  );
};
