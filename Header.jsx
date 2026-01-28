import { useState, useEffect } from 'react';
import { Search, Menu, X, ShoppingCart, Heart } from 'lucide-react';

export default function Header({ searchQuery, setSearchQuery, compareList }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Categories', href: '#categories' },
    { name: 'Deals', href: '#deals' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-midnight/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                LUXE
              </span>
              <span className="hidden sm:inline-block text-xs text-cyan font-medium tracking-wider">
                AFFILIATE
              </span>
            </a>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div
                className={`relative w-full transition-all duration-300 ${
                  isSearchFocused ? 'scale-105' : ''
                }`}
              >
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 transition-all"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Compare Button */}
              <a
                href="#compare"
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Heart size={18} className="text-cyan" />
                <span className="text-sm text-text-secondary">
                  {compareList.length > 0 && (
                    <span className="ml-1 text-cyan font-medium">({compareList.length})</span>
                  )}
                </span>
              </a>

              {/* Mobile Search Button */}
              <button
                className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                onClick={() => setIsSearchFocused(!isSearchFocused)}
              >
                <Search size={20} className="text-text-secondary" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X size={20} className="text-text-secondary" />
                ) : (
                  <Menu size={20} className="text-text-secondary" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchFocused && (
            <div className="md:hidden pb-4 animate-fade-in">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-cyan/50"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-midnight/98 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display font-bold text-2xl text-white hover:text-cyan transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          {/* Mobile Compare */}
          <a
            href="#compare"
            className="flex items-center gap-3 mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Heart size={24} className="text-cyan" />
            <span className="text-lg text-text-secondary">
              Compare ({compareList.length})
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
