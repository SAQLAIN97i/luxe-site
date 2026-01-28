import { useEffect, useRef } from 'react';
import { ArrowRight, Camera, Plane, Headphones, Monitor, Watch } from 'lucide-react';
import { products } from '../data/products';

const categoryData = [
  {
    id: 'Cameras',
    name: 'Cameras',
    description: 'Capture every moment in stunning detail with our professional camera collection.',
    icon: Camera,
    bgImage: './images/camera_bg.jpg',
    productCount: 1,
  },
  {
    id: 'Drones',
    name: 'Drones',
    description: 'Take to the skies with cutting-edge drone technology for aerial photography.',
    icon: Plane,
    bgImage: './images/drone_bg.jpg',
    productCount: 1,
  },
  {
    id: 'Audio',
    name: 'Audio',
    description: 'Immersive sound experiences with premium headphones and speakers.',
    icon: Headphones,
    bgImage: './images/headphones_bg.jpg',
    productCount: 2,
  },
  {
    id: 'Computing',
    name: 'Computing',
    description: 'Powerful laptops and tablets for work, gaming, and creativity.',
    icon: Monitor,
    bgImage: './images/laptop_bg.jpg',
    productCount: 3,
  },
  {
    id: 'Wearables',
    name: 'Wearables',
    description: 'Smart watches and fitness trackers to monitor your health and stay connected.',
    icon: Watch,
    bgImage: './images/watch_bg.jpg',
    productCount: 1,
  },
];

export default function CategorySections({ onCategoryClick }) {
  const sectionRef = useRef(null);

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
    <section id="categories" ref={sectionRef} className="py-20 lg:py-32 bg-midnight-light">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="animate-on-scroll opacity-0 text-center mb-16">
            <p className="category-label mb-4">BROWSE BY</p>
            <h2 className="headline-section text-white mb-4">
              SHOP <span className="text-cyan">CATEGORIES</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Explore our curated categories and find the perfect tech for your needs
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="animate-on-scroll opacity-0 group relative overflow-hidden rounded-2xl cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => onCategoryClick(category.id)}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${category.bgImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/40" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-80 flex flex-col justify-end">
                    {/* Icon */}
                    <div className="mb-4 w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center border border-cyan/30">
                      <Icon size={24} className="text-cyan" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-cyan transition-colors">
                      {category.name}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {category.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-cyan">
                      <span className="text-sm font-medium">
                        {category.productCount} Product{category.productCount !== 1 ? 's' : ''}
                      </span>
                      <ArrowRight
                        size={16}
                        className="transform group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
