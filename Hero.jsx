import { useEffect, useRef } from 'react';
import { ArrowRight, Star, TrendingDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(./images/hero_bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/70 to-midnight/80" />
      </div>

      {/* Glow Orbs */}
      <div className="glow-orb glow-cyan w-[500px] h-[500px] -top-48 -right-48 animate-pulse-glow" />
      <div className="glow-orb glow-purple w-[400px] h-[400px] bottom-20 left-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 mb-6">
                <Star size={14} className="text-cyan fill-cyan" />
                <span className="text-xs font-medium text-cyan tracking-wide">PREMIUM TECH DEALS</span>
              </div>

              {/* Headline */}
              <h1 className="animate-on-scroll opacity-0 headline-hero text-white mb-6" style={{ animationDelay: '0.1s' }}>
                DISCOVER
                <br />
                <span className="text-cyan">ELITE</span> TECH
              </h1>

              {/* Subtitle */}
              <p className="animate-on-scroll opacity-0 text-lg sm:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
                Curated collection of premium gadgets with exclusive affiliate deals. 
                Save up to <span className="text-cyan font-semibold">25%</span> on top brands.
              </p>

              {/* CTA Buttons */}
              <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ animationDelay: '0.3s' }}>
                <a
                  href="#products"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#deals"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <TrendingDown size={18} />
                  <span>View Deals</span>
                </a>
              </div>

              {/* Stats */}
              <div className="animate-on-scroll opacity-0 mt-12 grid grid-cols-3 gap-6" style={{ animationDelay: '0.4s' }}>
                <div className="text-center lg:text-left">
                  <p className="text-3xl sm:text-4xl font-display font-bold text-cyan">8+</p>
                  <p className="text-sm text-text-muted mt-1">Products</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-3xl sm:text-4xl font-display font-bold text-cyan">25%</p>
                  <p className="text-sm text-text-muted mt-1">Max Savings</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-3xl sm:text-4xl font-display font-bold text-cyan">4.8</p>
                  <p className="text-sm text-text-muted mt-1">Avg Rating</p>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Product Preview */}
            <div className="animate-on-scroll opacity-0 hidden lg:block" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Product Card */}
                <div className="product-card p-6 relative z-10">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-8 mb-4">
                    <img
                      src="./images/product_laptop2.png"
                      alt="Featured Product"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="category-label mb-1">FEATURED</p>
                      <h3 className="font-display font-bold text-xl text-white">Business Laptop</h3>
                    </div>
                    <div className="px-3 py-1 bg-cyan text-midnight text-sm font-bold rounded-full">
                      -13%
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-xs text-text-muted ml-2">(2,156)</span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-display font-bold text-cyan">$1,299</span>
                    <span className="text-sm text-text-muted line-through">$1,499</span>
                  </div>

                  <button className="w-full btn-primary text-center">View Deal</button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-cyan/30 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cyan rounded-full" />
        </div>
      </div>
    </section>
  );
}
