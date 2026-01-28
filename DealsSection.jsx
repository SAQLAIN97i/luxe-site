import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, TrendingDown } from 'lucide-react';
import { products } from '../data/products';

export default function DealsSection({ onProductClick }) {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Get products with discounts, sorted by discount percentage
  const deals = products
    .filter((p) => p.discount > 0)
    .sort((a, b) => b.discount - a.discount);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtons, { passive: true });
      checkScrollButtons();
      return () => carousel.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

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
  }, []);

  return (
    <section id="deals" ref={sectionRef} className="py-20 lg:py-32 bg-midnight">
      <div className="w-full">
        {/* Section Header */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 mb-10">
          <div className="max-w-7xl mx-auto">
            <div className="animate-on-scroll opacity-0 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown size={20} className="text-red-400" />
                  <p className="category-label text-red-400">LIMITED TIME OFFERS</p>
                </div>
                <h2 className="headline-section text-white">
                  HOT <span className="text-cyan">DEALS</span>
                </h2>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`p-3 rounded-full border border-white/10 transition-all ${
                    canScrollLeft
                      ? 'hover:bg-white/10 hover:border-cyan/50'
                      : 'opacity-30 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft size={20} className="text-white" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`p-3 rounded-full border border-white/10 transition-all ${
                    canScrollRight
                      ? 'hover:bg-white/10 hover:border-cyan/50'
                      : 'opacity-30 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {deals.map((product, index) => (
            <div
              key={product.id}
              className="animate-on-scroll opacity-0 flex-shrink-0 w-[300px] snap-start"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="group cursor-pointer bg-midnight-light rounded-2xl border border-white/[0.06] overflow-hidden hover:border-cyan/30 transition-all duration-300 hover:shadow-glow"
                onClick={() => onProductClick(product)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-6">
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white text-sm font-bold rounded-full flex items-center gap-1">
                    <TrendingDown size={14} />
                    SAVE {product.discount}%
                  </div>

                  {/* Prime Badge */}
                  {product.prime && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-[#00A8E1]/20 text-[#00A8E1] text-[10px] font-bold rounded">
                      PRIME
                    </div>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="category-label mb-2">{product.category}</p>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-display font-bold text-cyan">
                      ${product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-text-muted line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* CTA */}
                  <button className="w-full py-3 px-4 rounded-lg bg-cyan/10 hover:bg-cyan text-cyan hover:text-midnight text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                    <span>View Deal</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 mt-6">
          <div className="max-w-md mx-auto">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan to-cyan-dark rounded-full transition-all duration-300"
                style={{
                  width: carouselRef.current
                    ? `${(carouselRef.current.scrollLeft /
                        (carouselRef.current.scrollWidth - carouselRef.current.clientWidth)) *
                        100}%`
                    : '0%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
