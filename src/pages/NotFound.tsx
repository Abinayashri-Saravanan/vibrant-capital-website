import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { isArabic } = useLanguage();
  const base = isArabic ? "/ar" : "";

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className={`${isArabic ? 'text-right' : 'text-center'} px-6`}>
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          {isArabic ? "عذرًا! الصفحة غير موجودة" : "Oops! Page not found"}
        </p>
        <Link to={`${base}/`} className="text-primary underline hover:opacity-80">
          {isArabic ? "العودة إلى الرئيسية" : "Return to Home"}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
