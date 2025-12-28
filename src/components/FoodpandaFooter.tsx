import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import FoodpandaLogo from "@/components/FoodpandaLogo";

const FoodpandaFooter = () => {
  const footerLinks = {
    navigate: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Newsroom", path: "/newsroom" },
    ],
    collaborate: [
      { name: "Explore careers", path: "https://careers.foodpanda.com/", isExternal: true },
      { name: "Become a rider", path: "https://careers.foodpanda.com/", isExternal: true },
      { name: "Feed your team", path: "/corporate" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=273039666130793", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/foodpanda", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/foodpandasg", label: "Instagram" },
  ];

  const renderFooterLink = (link: any) => {
    const className = "text-gray-300 hover:text-primary transition-colors text-sm font-medium block py-1";
    
    if (link.isExternal) {
      return (
        <a 
          href={link.path} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={className}
        >
          {link.name}
        </a>
      );
    }
    
    return (
      <Link to={link.path} className={className}>
        {link.name}
      </Link>
    );
  };

  return (
    <footer className="bg-panda-dark text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:w-1/3">
             <FoodpandaLogo className="h-8 md:h-10 text-primary w-fit" />
             <div className="text-sm text-gray-400 max-w-sm">
               The leading online food delivery marketplace in emerging markets. 
             </div>
             <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors text-white"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-2/3">
            
            {/* Navigate */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Navigate</h3>
              <ul className="space-y-3">
                {footerLinks.navigate.map((link) => (
                  <li key={link.name}>
                    {renderFooterLink(link)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaborate */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Collaborate</h3>
              <ul className="space-y-3">
                {footerLinks.collaborate.map((link) => (
                  <li key={link.name}>
                    {renderFooterLink(link)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal / More */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block py-1">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block py-1">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              Copyright © {new Date().getFullYear()} <a href="https://foodpanda.com" className="hover:text-primary hover:underline text-white">foodpanda</a>. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default FoodpandaFooter;