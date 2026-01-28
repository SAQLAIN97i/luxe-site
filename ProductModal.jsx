import { useEffect, useRef } from 'react';
import { X, Star, ExternalLink, Check, Package, Shield, Truck, Heart, ShoppingCart } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose, isCompare, onCompare }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  const handleBuyClick = () => {
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen || !product) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] modal-backdrop flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-midnight-light border border-white/10 shadow-2xl animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X size={24} className="text-text-secondary" />
        </button>

        <div className="flex flex-col lg:flex-row overflow-y-auto max-h-[90vh]">
          {/* Left - Image */}
          <div className="lg:w-1/2 p-6 lg:p-8 bg-gradient-to-br from-white/5 to-transparent">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-radial from-cyan/10 via-transparent to-transparent" />
              
              {/* Discount Badge */}
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 px-4 py-2 bg-cyan text-midnight font-bold rounded-full">
                  SAVE {product.discount}%
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-[80%] h-[80%] object-contain relative z-10"
              />
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="text-center p-3 rounded-xl bg-white/5">
                <Star className="w-5 h-5 text-yellow-400 mx-auto mb-1" fill="currentColor" />
                <p className="text-lg font-bold text-white">{product.rating}</p>
                <p className="text-xs text-text-muted">Rating</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/5">
                <Package className="w-5 h-5 text-cyan mx-auto mb-1" />
                <p className="text-lg font-bold text-white">Prime</p>
                <p className="text-xs text-text-muted">Shipping</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/5">
                <Shield className="w-5 h-5 text-cyan mx-auto mb-1" />
                <p className="text-lg font-bold text-white">2yr</p>
                <p className="text-xs text-text-muted">Warranty</p>
              </div>
            </div>
          </div>

          {/* Right - Details */}
          <div className="lg:w-1/2 p-6 lg:p-8">
            {/* Category */}
            <p className="category-label mb-3">{product.category}</p>

            {/* Title */}
            <h2 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
                  />
                ))}
              </div>
              <span className="text-sm text-text-muted">
                {product.rating} ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-display font-bold text-cyan">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-text-muted line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check size={16} className="text-cyan mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
                <Truck size={16} className="text-cyan" />
                <span className="text-xs text-text-secondary">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
                <Shield size={16} className="text-cyan" />
                <span className="text-xs text-text-secondary">2-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
                <Package size={16} className="text-cyan" />
                <span className="text-xs text-text-secondary">30-Day Returns</span>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className={`text-sm ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                {product.inStock ? 'In Stock - Ships Today' : 'Out of Stock'}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleBuyClick}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                <span>Buy on Amazon</span>
                <ExternalLink size={14} />
              </button>

              <div className="flex gap-3">
                <button
                  onClick={() => onCompare(product)}
                  className={`flex-1 py-3 px-4 rounded-lg border transition-all flex items-center justify-center gap-2 ${
                    isCompare
                      ? 'bg-cyan border-cyan text-midnight'
                      : 'border-white/10 hover:border-cyan/50 text-text-secondary'
                  }`}
                >
                  <Heart size={16} className={isCompare ? 'fill-current' : ''} />
                  <span className="text-sm">
                    {isCompare ? 'Added to Compare' : 'Add to Compare'}
                  </span>
                </button>
              </div>

              <p className="text-xs text-center text-text-muted">
                As an Amazon Associate, we earn from qualifying purchases
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
