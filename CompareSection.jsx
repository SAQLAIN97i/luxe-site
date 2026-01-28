import { X, Check, Star, ExternalLink } from 'lucide-react';

export default function CompareSection({ compareList, setCompareList, onProductClick }) {
  if (compareList.length === 0) return null;

  const handleRemove = (productId) => {
    setCompareList((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearAll = () => {
    setCompareList([]);
  };

  return (
    <section id="compare" className="py-20 lg:py-32 bg-midnight-light">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <p className="category-label mb-2">COMPARE</p>
              <h2 className="headline-section text-white">
                PRODUCT <span className="text-cyan">COMPARISON</span>
              </h2>
            </div>
            <button
              onClick={handleClearAll}
              className="btn-secondary flex items-center gap-2 self-start"
            >
              <X size={16} />
              <span>Clear All</span>
            </button>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Products Row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="p-4">
                  <p className="text-text-muted text-sm">Feature</p>
                </div>
                {compareList.map((product) => (
                  <div key={product.id} className="product-card p-4 relative">
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-white/5 hover:bg-red-500/20 transition-colors"
                    >
                      <X size={14} className="text-text-muted" />
                    </button>

                    <div
                      className="aspect-square bg-gradient-to-br from-white/5 to-transparent rounded-xl flex items-center justify-center p-4 mb-3 cursor-pointer"
                      onClick={() => onProductClick(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <h3
                      className="font-display font-bold text-sm text-white mb-2 cursor-pointer hover:text-cyan transition-colors line-clamp-1"
                      onClick={() => onProductClick(product)}
                    >
                      {product.name}
                    </h3>

                    <p className="text-cyan font-bold text-lg mb-2">
                      ${product.price.toLocaleString()}
                    </p>

                    <button
                      onClick={() => window.open(product.affiliateLink, '_blank')}
                      className="w-full py-2 px-3 rounded-lg bg-cyan/10 hover:bg-cyan text-cyan hover:text-midnight text-xs font-medium transition-all flex items-center justify-center gap-1"
                    >
                      <span>Buy Now</span>
                      <ExternalLink size={12} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Comparison Rows */}
              {[
                { label: 'Category', key: 'category' },
                { label: 'Rating', key: 'rating', format: (v) => `${v}/5` },
                { label: 'Reviews', key: 'reviews', format: (v) => v.toLocaleString() },
                { label: 'Original Price', key: 'originalPrice', format: (v) => `$${v.toLocaleString()}` },
                { label: 'Discount', key: 'discount', format: (v) => `${v}%` },
                { label: 'Prime Shipping', key: 'prime', format: (v) => (v ? 'Yes' : 'No') },
                { label: 'In Stock', key: 'inStock', format: (v) => (v ? 'Yes' : 'No') },
              ].map((row, index) => (
                <div
                  key={row.key}
                  className={`grid grid-cols-4 gap-4 py-4 ${
                    index % 2 === 0 ? 'bg-white/[0.02]' : ''
                  }`}
                >
                  <div className="px-4 flex items-center">
                    <p className="text-text-secondary text-sm">{row.label}</p>
                  </div>
                  {compareList.map((product) => (
                    <div key={product.id} className="px-4 flex items-center">
                      {row.key === 'rating' ? (
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-white text-sm">{product.rating}</span>
                        </div>
                      ) : row.key === 'prime' || row.key === 'inStock' ? (
                        <div className="flex items-center gap-1">
                          {product[row.key] ? (
                            <>
                              <Check size={14} className="text-green-400" />
                              <span className="text-green-400 text-sm">Yes</span>
                            </>
                          ) : (
                            <>
                              <X size={14} className="text-red-400" />
                              <span className="text-red-400 text-sm">No</span>
                            </>
                          )}
                        </div>
                      ) : (
                        <p className="text-white text-sm">
                          {row.format ? row.format(product[row.key]) : product[row.key]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* Features Row */}
              <div className="grid grid-cols-4 gap-4 py-4 bg-white/[0.02]">
                <div className="px-4">
                  <p className="text-text-secondary text-sm">Key Features</p>
                </div>
                {compareList.map((product) => (
                  <div key={product.id} className="px-4">
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-1 text-xs text-text-muted">
                          <Check size={10} className="text-cyan mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
