import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const PandaAdsFooter = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white">
      <div className="container mx-auto px-4 md:px-20 py-12 md:py-16">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="https://pandaads.foodpanda.com/wp-content/themes/wp-delivery-hero-core-v2/assets/img/foodpanda/logos/logo-white.svg" 
            alt="foodpanda logo" 
            className="h-8 md:h-10"
          />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Our Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our company</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.foodpanda.com/about-foodpanda/" className="text-white hover:text-primary transition-colors">
                  About foodpanda
                </a>
              </li>
              <li>
                <Link to="/pandaads/privacy-policy" className="text-white hover:text-primary transition-colors">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* panda ads */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-6">panda ads</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <ul className="space-y-3">
                <li>
                  <Link to="/pandaads/solutions" className="text-white hover:text-primary transition-colors">
                    Retail media solutions
                  </Link>
                </li>
                <li>
                  <a href="https://mediakit-pandaads.foodpanda.com/" className="text-white hover:text-primary transition-colors">
                    Media kit generator
                  </a>
                </li>
                <li>
                  <Link to="/pandaads/resources/case-studies" className="text-white hover:text-primary transition-colors">
                    Case studies
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link to="/pandaads/resources/insights" className="text-white hover:text-primary transition-colors">
                    Industry Insights
                  </Link>
                </li>
                <li>
                  <Link to="/pandaads/resources/newsroom" className="text-white hover:text-primary transition-colors">
                    Newsroom
                  </Link>
                </li>
                <li>
                  <a href="https://panda-ads-quiz.deliveryhero.net/" className="text-white hover:text-primary transition-colors">
                    Pau-Pau marketer personality quiz
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="font-bold text-lg mb-6">Get in touch!</h3>
            <div className="mb-8">
              <Link 
                to="/pandaads/contact" 
                className="bg-primary text-white font-bold py-3 px-6 rounded-full inline-block hover:bg-primary/90 transition-colors"
              >
                Contact us
              </Link>
            </div>
            <div>
              <p className="font-bold mb-4">Follow us on</p>
              <a 
                href="https://www.linkedin.com/showcase/pandaads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors inline-block"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm">
            Copyright © 2025 <a href="https://foodpanda.com" className="hover:text-primary">foodpanda</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PandaAdsFooter;
