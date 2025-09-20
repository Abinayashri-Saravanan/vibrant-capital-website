import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="nav-hero-bg border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Vibrant Capital</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Making AI practical and profitable today while laying the foundations for tomorrow's AI-native enterprises.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:info@haiintel.com" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navigation</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link to="/investments" className="block text-white/80 hover:text-white transition-colors text-sm">
                Investments
              </Link>
              <Link to="/sectors" className="block text-white/80 hover:text-white transition-colors text-sm">
                Sectors
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Services</h4>
            <div className="space-y-2">
              <Link to="/for-investors" className="block text-white/80 hover:text-white transition-colors text-sm">
                For Investors
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
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
              © {new Date().getFullYear()} Vibrant Capital. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;