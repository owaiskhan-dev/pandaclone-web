import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const PandaAdsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/pandaads" },
    { name: "Solutions", path: "/pandaads/solutions" },
    { 
      name: "Resources", 
      path: "/pandaads/resources",
      hasDropdown: true,
      subItems: [
        { name: "Insights", path: "/pandaads/resources/insights" },
        { name: "Case studies", path: "/pandaads/resources/case-studies" },
        { name: "Newsroom", path: "/pandaads/resources/newsroom" },
      ]
    },
    { 
      name: "Tools", 
      path: "#",
      hasDropdown: true,
      subItems: [
        { name: "Media kit generator", path: "https://mediakit-pandaads.foodpanda.com/", external: true },
        { name: "Marketer personality quiz", path: "https://panda-ads-quiz.deliveryhero.net/", external: true },
      ]
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/pandaads" className="flex items-center">
            <img 
              src="https://pandaads.foodpanda.com/wp-content/uploads/2024/06/foodpanda_panda-ads_logo.svg" 
              alt="panda ads by foodpanda" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors rounded-full ${
                        location.pathname.includes(item.path) && item.path !== "#"
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 w-64 bg-white border border-border rounded-xl shadow-xl py-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.subItems?.map((subItem) => (
                          subItem.external ? (
                            <a
                              key={subItem.path}
                              href={subItem.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-6 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-6 py-2.5 text-sm font-medium transition-colors ${
                                isActive(subItem.path)
                                  ? "text-primary bg-primary/5"
                                  : "text-foreground hover:text-primary hover:bg-muted/50"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-semibold transition-colors rounded-full ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center border border-border rounded-full px-4 py-1.5 focus-within:border-primary transition-colors">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent border-none outline-none text-sm w-32 focus:w-48 transition-all"
              />
            </div>

            <Button
              variant="panda"
              className="hidden md:flex rounded-full px-6 font-bold"
              asChild
            >
              <Link to="/pandaads/contact">Contact us</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border overflow-y-auto max-h-[calc(100vh-80px)]">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-foreground hover:bg-muted"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="flex flex-col gap-1 ml-4 mt-1 border-l-2 border-primary/20 pl-4">
                        {item.subItems?.map((subItem) => (
                          subItem.external ? (
                            <a
                              key={subItem.path}
                              href={subItem.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:text-primary"
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setIsMenuOpen(false)}
                              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                isActive(subItem.path)
                                  ? "text-primary bg-primary/5"
                                  : "text-foreground"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl font-bold transition-colors block ${
                      isActive(item.path)
                        ? "bg-primary/5 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button
              variant="panda"
              asChild
              className="mt-6 rounded-full font-bold"
            >
              <Link to="/pandaads/contact" onClick={() => setIsMenuOpen(false)}>
                Contact us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default PandaAdsHeader;