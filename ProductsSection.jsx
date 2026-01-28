import { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { products, categories, searchProducts } from '../data/products';
import { Grid, List, Filter, ChevronDown } from 'lucide-react';

export default function ProductsSection({ searchQuery, compareList, setCompareList }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const sectionRef = useRef(null);

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = searchQuery
      ? searchProducts(searchQuery)
      : products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        filtered = [...filtered].sort((a, b) => b.discount - a.discount);
        break;
      default:
        // Keep original order for featured
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleCompare = (product) => {
    setCompareList((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 products');
        return prev;
      }
      return [...prev, product];
    });
  };

  const isProductCompared = (product) => {
    return compareList.some((p) => p.id === product.id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
    <section id="products" ref={sectionRef} className="py-20 lg:py-32 bg-midnight">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="animate-on-scroll opacity-0 text-center mb-12">
            <p className="category-label mb-4">OUR COLLECTION</p>
            <h2 className="headline-section text-white mb-4">
              FEATURED <span className="text-cyan">PRODUCTS</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Discover premium tech products handpicked for quality and value. 
              Exclusive deals updated daily.
            </p>
          </div>

          {/* Filters & Controls */}
          <div className="animate-on-scroll opacity-0 mb-8" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-cyan text-midnight'
                        : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                {/* Sort Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-text-secondary hover:bg-white/10 transition-colors"
                  >
                    <Filter size={16} />
                    <span className="text-sm">Sort</span>
                    <ChevronDown size={14} />
                  </button>

                  {showFilters && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-midnight-light border border-white/10 rounded-xl shadow-xl z-10">
                      {[
                        { value: 'featured', label: 'Featured' },
                        { value: 'price-low', label: 'Price: Low to High' },
                        { value: 'price-high', label: 'Price: High to Low' },
                        { value: 'rating', label: 'Highest Rated' },
                        { value: 'discount', label: 'Biggest Savings' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setShowFilters(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm transition-colors first:rounded-t-xl last:rounded-b-xl ${
                            sortBy === option.value
                              ? 'bg-cyan/10 text-cyan'
                              : 'text-text-secondary hover:bg-white/5'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-1 p-1 rounded-lg bg-white/5">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan text-midnight' : 'text-text-secondary'
                    }`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list' ? 'bg-cyan text-midnight' : 'text-text-secondary'
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-text-muted">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1'
              }`}
            >
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard
                    product={product}
                    isCompare={isProductCompared(product)}
                    onCompare={handleCompare}
                    onClick={handleProductClick}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">No products found</p>
              <p className="text-text-muted text-sm mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isCompare={selectedProduct ? isProductCompared(selectedProduct) : false}
        onCompare={handleCompare}
      />
    </section>
  );
}
