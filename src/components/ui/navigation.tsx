import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const location = useLocation();
  const { isArabic } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const base = isArabic ? "/ar" : "";
  const navItems = [
    { href: `${base}/`, label: isArabic ? "الرئيسية" : "Home" },
    { href: `${base}/about`, label: isArabic ? "من نحن" : "About" },
    { href: `${base}/investments`, label: isArabic ? "الاستثمارات" : "Investments" },
    { href: `${base}/sectors`, label: isArabic ? "القطاعات" : "Sectors" },
    { href: `${base}/for-investors`, label: isArabic ? "للمستثمرين" : "For Investors" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-hero-bg backdrop-blur-xl border-b border-white/10"> 
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={isArabic ? "/ar" : "/"} className="flex items-center group">
            {isArabic ? (
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-black text-white whitespace-nowrap">فايبرانت كابيتال</span>
                <span className="text-[10px] mt-1 text-white/70">نُمكّن الموجة الثالثة من الذكاء الاصطناعي</span>
              </div>
            ) : (
              <img
                src="/images/VibrantCapitalLogo4.svg"
                alt="Vibrant Capital"
                className="h-14 w-auto transition-all duration-300 group-hover:scale-105 nav-logo"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className={cn("hidden lg:flex items-center", isArabic ? "gap-x-16" : "space-x-8")}>
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group",
                  location.pathname === item.href
                    ? "text-green-400"
                    : "text-white/80 hover:text-green-400"
                )}
              >
                {isArabic ? (
                  <span className="relative z-10 nav-text-item">{item.label}</span>
                ) : (
                  <span className="relative z-10 nav-text-item">
                    {item.label.split('').map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className="inline-block nav-char transition-all duration-200"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </span>
                )}
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-300 transition-all duration-500",
                  location.pathname === item.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                )}></span>
                <span className="absolute inset-0 bg-green-400/5 rounded-lg scale-0 transition-transform duration-300 group-hover:scale-100 -z-10"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              className="nav-contact-btn uppercase tracking-wider font-bold border-2 border-white/40 text-white bg-transparent hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
              asChild
            >
              <Link to={`${base}/contact`}>{isArabic ? "تواصل" : "CONTACT"}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="nav-contact-btn uppercase tracking-wider font-bold border-2 border-white/40 text-white bg-transparent hover:bg-white hover:text-slate-900 transition-all duration-300"
              asChild
            >
              <Link to={`${base}/contact`}>{isArabic ? "تواصل" : "CONTACT"}</Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-white hover:bg-white/10 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className={cn("flex flex-col space-y-4 pt-4", isArabic && "text-right")}>
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (typeof window !== 'undefined') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={cn(
                    "text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group px-4 py-2 rounded-lg",
                    location.pathname === item.href
                      ? "text-green-400 bg-green-400/10"
                      : "text-white/80 hover:text-green-400 hover:bg-green-400/5"
                  )}
                >
                  <span className="relative z-10 nav-text-item">
                    {item.label.split('').map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className="inline-block nav-char transition-all duration-200"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;