// [src/pages/index.tsx](my-nextjs-app/src/pages/index.tsx)
import useTranslation from "next-translate/useTranslation";

const IndexPage: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <span className="text-xl">{t("title")}</span>
      <p>{t("description")}</p>
    </div>
  );
};

export default IndexPage;
