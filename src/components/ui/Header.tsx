import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { t } from "../../i18n";
// import logo from "../../assets/logo.png"; // Uncomment and adjust if you have a logo

const Header: React.FC = () => {
  const { lang } = useLanguage();
  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: lang === "ar" ? "flex-end" : "flex-start",
        padding: "1rem 2rem"
      }}>
        {/* <img src={logo} alt="Vibrant Capital" style={{ height: 40, marginInlineEnd: 24 }} /> */}
        <ul style={{
          display: "flex",
          gap: "1.5rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
          flexDirection: lang === "ar" ? "row-reverse" : "row"
        }}>
          <li><Link to="/">{t(lang, "home")}</Link></li>
          <li><Link to="/about">{t(lang, "about")}</Link></li>
          <li><Link to="/investments">{t(lang, "investments")}</Link></li>
          <li><Link to="/sectors">{t(lang, "sectors")}</Link></li>
          <li><Link to="/for-investors">{t(lang, "forInvestors")}</Link></li>
          <li><Link to="/contact">{t(lang, "contact")}</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;