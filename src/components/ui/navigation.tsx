import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/investments", label: "Investments" },
    { href: "/philosophy", label: "Philosophy" },
    { href: "/sectors", label: "Sectors" },
    { href: "/for-investors", label: "For Investors" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-hero-bg backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src="/images/VibrantCapitalLogo4.svg"
              alt="Vibrant Capital"
              className="h-14 w-auto transition-all duration-300 group-hover:scale-105 nav-logo"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group",
                  location.pathname === item.href
                    ? "text-green-400"
                    : "text-white/80 hover:text-green-400"
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="nav-contact-btn uppercase tracking-wider font-bold border-2 border-white/40 text-white bg-transparent hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              CONTACT
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

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              className="nav-contact-btn uppercase tracking-wider font-bold border-2 border-white/40 text-white bg-transparent hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              CONTACT
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
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