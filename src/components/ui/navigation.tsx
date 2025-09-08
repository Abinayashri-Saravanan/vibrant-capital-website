import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/investments", label: "Investments" },
    { href: "/philosophy", label: "Philosophy" },
    { href: "/sectors", label: "Sectors" },
    { href: "/for-investors", label: "For Investors" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-black uppercase tracking-wider text-spacex-gradient">
            VIBRANT CAPITAL
          </Link>
          
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary relative group",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <Button className="btn-spacex uppercase tracking-wider font-bold">
            CONTACT
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;