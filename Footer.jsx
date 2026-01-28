import { 
  Twitter, 
  Instagram, 
  Youtube, 
  Facebook, 
  Mail, 
  MapPin, 
  Phone,
  ExternalLink,
  Heart
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Cameras', href: '#categories' },
      { name: 'Drones', href: '#categories' },
      { name: 'Audio', href: '#categories' },
      { name: 'Computing', href: '#categories' },
      { name: 'Wearables', href: '#categories' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Track Order', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Affiliate Disclosure', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ];

  return (
    <footer id="contact" className="bg-midnight-light border-t border-white/5">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a href="#home" className="inline-block mb-6">
                <span className="font-display font-bold text-2xl text-white tracking-tight">
                  LUXE
                </span>
                <span className="ml-2 text-xs text-cyan font-medium tracking-wider">
                  AFFILIATE
                </span>
              </a>

              <p className="text-text-secondary text-sm mb-6 max-w-sm">
                Your trusted source for premium tech products. We curate the best deals 
                so you can shop with confidence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Mail size={16} className="text-cyan" />
                  <span>support@luxeaffiliate.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Phone size={16} className="text-cyan" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <MapPin size={16} className="text-cyan" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Products Links */}
            <div>
              <h4 className="font-display font-bold text-white mb-4">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-cyan transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display font-bold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-cyan transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-display font-bold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-cyan transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-display font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-cyan transition-colors flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink size={10} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-text-muted">
              <span>&copy; {currentYear} LUXE Affiliate. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                Made with <Heart size={12} className="text-red-400 fill-red-400" /> for tech lovers
              </span>
            </div>

            {/* Affiliate Disclosure */}
            <p className="text-xs text-text-muted text-center md:text-right max-w-md">
              As an Amazon Associate, we earn from qualifying purchases. 
              Product prices and availability are accurate as of the date/time indicated.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan/20 text-text-muted hover:text-cyan transition-all"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
