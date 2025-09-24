import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { isArabic, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const base = isArabic ? "/ar" : "";

  const switchTo = (lang: "en" | "ar") => {
    setLanguage(lang);
    const current = location.pathname.replace(/^\/ar/, "");
    navigate(lang === "ar" ? `/ar${current || "/"}` : current || "/");
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };
  return (
    <footer className="nav-hero-bg border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Vibrant Capital</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {isArabic
                ? "نجعل الذكاء الاصطناعي عمليًا ومربحًا اليوم، ونؤسس لمؤسسات أصيلة بالذكاء الاصطناعي غدًا."
                : "Making AI practical and profitable today while laying the foundations for tomorrow's AI-native enterprises."}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">{isArabic ? "التنقّل" : "Navigation"}</h4>
            <div className="space-y-2">
              <Link to={`${base}/`} className="block text-white/80 hover:text-white transition-colors text-sm" onClick={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}>
                {isArabic ? "الرئيسية" : "Home"}
              </Link>
              <Link to={`${base}/about`} className="block text-white/80 hover:text-white transition-colors text-sm" onClick={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}>
                {isArabic ? "من نحن" : "About"}
              </Link>
              <Link to={`${base}/investments`} className="block text-white/80 hover:text-white transition-colors text-sm" onClick={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}>
                {isArabic ? "الاستثمارات" : "Investments"}
              </Link>
              <Link to={`${base}/sectors`} className="block text-white/80 hover:text-white transition-colors text-sm" onClick={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}>
                {isArabic ? "القطاعات" : "Sectors"}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Link to={`${base}/for-investors`} className="block text-white/80 hover:text-white transition-colors text-sm" onClick={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}>
                {isArabic ? "للمستثمرين" : "For Investors"}
              </Link>
              <Link to={`${base}/contact`} className="block text-white/80 hover:text-white transition-colors text-sm" onClick={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}>
                {isArabic ? "تواصل" : "Contact"}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">{isArabic ? "تواصل" : "Contact"}</h4>
            <div className="space-y-2">
              <a 
                href="mailto:info@haiintel.com"
                className="block text-white/80 hover:text-white transition-colors text-sm"
              >
                info@haiintel.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">
              {isArabic ? `© ${new Date().getFullYear()} فايبرانت كابيتال. جميع الحقوق محفوظة.` : `© ${new Date().getFullYear()} Vibrant Capital. All rights reserved.`}
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-sm">
                <button
                  className={`px-3 py-1 rounded ${isArabic ? 'bg-white text-slate-900 font-semibold' : 'text-white/80 hover:text-white border border-white/20'}`}
                  onClick={() => switchTo('ar')}
                >
                  العربية
                </button>
                <button
                  className={`px-3 py-1 rounded ${!isArabic ? 'bg-white text-slate-900 font-semibold' : 'text-white/80 hover:text-white border border-white/20'}`}
                  onClick={() => switchTo('en')}
                >
                  English
                </button>
              </div>
              <Link to={`${base}/legal`} className="text-white/80 hover:text-white transition-colors text-sm" onClick={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}>
                {isArabic ? "الشؤون القانونية" : "Legal"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;