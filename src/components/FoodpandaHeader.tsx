import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import FoodpandaLogo from "@/components/FoodpandaLogo";
import LocationModal from "./LocationModal";

const FoodpandaHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Partners", path: "/partners" },
    { name: "panda ads", path: "/pandaads", isPandaAds: true },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "https://careers.foodpanda.com/", isExternal: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  const renderNavItem = (item: any, mobile = false) => {
    const className = mobile
      ? `px-4 py-3 rounded-xl font-bold text-lg transition-colors ${
          isActive(item.path) ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"
        }`
      : `px-3 py-2 text-sm font-bold transition-colors rounded-full ${
          isActive(item.path) ? "text-primary" : "text-gray-700 hover:text-primary"
        }`;

    if (item.isExternal) {
      return (
        <a
          key={item.name}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {item.name}
        </a>
      );
    }

    return (
      <Link key={item.path} to={item.path} className={className}>
        {item.name}
      </Link>
    );
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled || isMenuOpen || isSearchOpen ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 relative">
          
          {/* Search Overlay */}
          <div 
            className={`absolute inset-0 bg-white z-50 flex items-center transition-all duration-300 ${
              isSearchOpen 
                ? "opacity-100 visible translate-y-0" 
                : "opacity-0 invisible -translate-y-4"
            }`}
          >
             <div className="w-full flex items-center gap-4">
               <Search className="w-5 h-5 text-gray-400 shrink-0" />
               <input 
                  type="text" 
                  placeholder="Search..." 
                  className="flex-1 text-lg outline-none bg-transparent placeholder:text-gray-400 text-foreground"
                  autoFocus={isSearchOpen}
               />
               <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
               </button>
             </div>
          </div>

          <div className={`flex items-center justify-between transition-opacity duration-200 ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}>
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 relative z-50">
              <FoodpandaLogo className="h-6 md:h-8 text-primary" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => renderNavItem(item))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="location"
                size="sm"
                onClick={() => setIsLocationOpen(true)}
                className="hidden md:flex"
              >
                Choose location
              </Button>

              <button 
                className="p-2 hover:bg-muted rounded-full transition-colors"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-5 h-5 text-foreground" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors relative z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => renderNavItem(item, true))}
            <Button
              variant="panda"
              size="lg"
              onClick={() => {
                setIsMenuOpen(false);
                setIsLocationOpen(true);
              }}
              className="mt-6 w-full shadow-pink"
            >
              Choose location
            </Button>
          </nav>
        </div>
      </div>

      <LocationModal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
    </>
  );
};

export default FoodpandaHeader;