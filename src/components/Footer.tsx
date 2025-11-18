import { Link } from "react-router-dom";
import logo from "@/assets/Final-Logo-copy.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <img src={logo} alt="FLM 380 Wireless" className="h-12 w-auto" />

          {/* Company Info */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">
              © 2024 FLM 380 Wireless
            </p>
            <p className="text-sm text-muted-foreground">
              iPhone, Computer & Device Repair in Brooklyn
            </p>
            <p className="text-sm text-muted-foreground">
              232 Rogers Ave, Brooklyn, NY 11225 · 347-450-7344
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
