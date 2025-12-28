import { X, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocationModal = ({ isOpen, onClose }: LocationModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const countries = [
    { name: "Singapore", flag: "🇸🇬", code: "sg" },
    { name: "Hong Kong", flag: "🇭🇰", code: "hk" },
    { name: "Thailand", flag: "🇹🇭", code: "th" },
    { name: "Malaysia", flag: "🇲🇾", code: "my" },
    { name: "Pakistan", flag: "🇵🇰", code: "pk" },
    { name: "Taiwan", flag: "🇹🇼", code: "tw" },
    { name: "Philippines", flag: "🇵🇭", code: "ph" },
    { name: "Bangladesh", flag: "🇧🇩", code: "bd" },
    { name: "Laos", flag: "🇱🇦", code: "la" },
    { name: "Cambodia", flag: "🇰🇭", code: "kh" },
    { name: "Myanmar", flag: "🇲🇲", code: "mm" },
  ];

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-panda-dark/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-xl w-full max-w-lg mx-4 animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Choose your location</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Search */}
        <div className="p-6 pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Countries Grid */}
        <div className="px-6 pb-6 max-h-[400px] overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredCountries.map((country) => (
              <button
                key={country.code}
                onClick={onClose}
                className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary">
                  {country.name}
                </span>
              </button>
            ))}
          </div>

          {filteredCountries.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No countries found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
