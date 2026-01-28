import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import CategorySections from './components/CategorySections';
import DealsSection from './components/DealsSection';
import CompareSection from './components/CompareSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import { products } from './data/products';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [compareList, setCompareList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Handle smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Handle category click from CategorySections
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Scroll to products section
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle product click for modal
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  // Check if product is in compare list
  const isProductCompared = (product) => {
    return compareList.some((p) => p.id === product.id);
  };

  // Handle compare toggle
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

  return (
    <div className="min-h-screen bg-midnight">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Header */}
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        compareList={compareList}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Products Section */}
        <ProductsSection 
          searchQuery={searchQuery}
          compareList={compareList}
          setCompareList={setCompareList}
        />

        {/* Category Sections */}
        <CategorySections onCategoryClick={handleCategoryClick} />

        {/* Deals Section */}
        <DealsSection onProductClick={handleProductClick} />

        {/* Compare Section */}
        <CompareSection 
          compareList={compareList}
          setCompareList={setCompareList}
          onProductClick={handleProductClick}
        />

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isCompare={selectedProduct ? isProductCompared(selectedProduct) : false}
        onCompare={handleCompare}
      />
    </div>
  );
}

export default App;
