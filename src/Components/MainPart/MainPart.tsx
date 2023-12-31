import { Trans, useTranslation } from "react-i18next";
import { Translation } from "react-i18next";

export const MainPart = () => {
  const { t } = useTranslation();

  return (
    <div className="col-md-6">
      <div className="card p-2">
        <div className="card-body">
          <h5 className="card-title">{t("content.functional")}</h5>

          <Trans i18nKey="content.text" />
          <Translation>
            {(t, { i18n }) => <p>{t("content.text2")}</p>}
          </Translation>
        </div>
      </div>
    </div>
  );
};
