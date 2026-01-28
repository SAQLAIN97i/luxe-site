import { Star, Heart, ExternalLink, Check } from 'lucide-react';

export default function ProductCard({ product, isCompare, onCompare, onClick }) {
  const handleCompareClick = (e) => {
    e.stopPropagation();
    onCompare(product);
  };

  const handleBuyClick = (e) => {
    e.stopPropagation();
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="product-card cursor-pointer group"
      onClick={() => onClick(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-6 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.badge && (
            <span className="px-2.5 py-1 bg-cyan/20 text-cyan text-[10px] font-bold uppercase tracking-wider rounded-full border border-cyan/30">
              {product.badge}
            </span>
          )}
          {product.discount > 0 && (
            <span className="px-2.5 py-1 bg-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-red-500/30">
              SAVE {product.discount}%
            </span>
          )}
        </div>

        {/* Prime Badge */}
        {product.prime && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2 py-1 bg-[#00A8E1]/20 text-[#00A8E1] text-[10px] font-bold rounded flex items-center gap-1">
              <Check size={10} />
              PRIME
            </span>
          </div>
        )}

        {/* Compare Button */}
        <button
          onClick={handleCompareClick}
          className={`absolute bottom-3 right-3 p-2 rounded-full transition-all z-10 ${
            isCompare
              ? 'bg-cyan text-midnight'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <Heart size={16} className={isCompare ? 'fill-current' : ''} />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="category-label mb-2">{product.category}</p>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
              />
            ))}
          </div>
          <span className="text-xs text-text-muted">({product.reviews.toLocaleString()})</span>
          <span className="text-xs text-yellow-400 font-medium ml-1">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-display font-bold text-cyan">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-text-muted line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className={`text-xs ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleBuyClick}
            className="flex-1 btn-primary py-3 text-sm flex items-center justify-center gap-2"
          >
            <span>Buy Now</span>
            <ExternalLink size={14} />
          </button>
          <button
            onClick={() => onClick(product)}
            className="px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan/30 transition-all"
          >
            <span className="text-xs text-text-secondary">Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
