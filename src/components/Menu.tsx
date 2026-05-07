import { motion } from 'framer-motion';
import { Star, Flame, ShoppingCart, ArrowRight } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Baso Aci Original',
    description: 'Baso aci dengan bumbu khas, topping telur dan mie',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
    rating: 4.9,
    spicy: 2,
    bestseller: true
  },
  {
    id: 2,
    name: 'Baso Aci Jumbo',
    description: 'Porsi jumbo dengan extra topping dan telur',
    price: 'Rp 20.000',
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80',
    rating: 5.0,
    spicy: 3,
    bestseller: true
  },
  {
    id: 3,
    name: 'Baso Aci Super Pedas',
    description: 'Untuk pecinta pedas, level pedas maksimal!',
    price: 'Rp 17.000',
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=600&q=80',
    rating: 4.8,
    spicy: 5,
    bestseller: false
  },
  {
    id: 4,
    name: 'Baso Aci Keju',
    description: 'Baso aci dengan topping keju melimpah',
    price: 'Rp 18.000',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
    rating: 4.9,
    spicy: 1,
    bestseller: false
  },
  {
    id: 5,
    name: 'Baso Aci Kornet',
    description: 'Baso aci dengan topping kornet premium',
    price: 'Rp 18.000',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    rating: 4.7,
    spicy: 2,
    bestseller: false
  },
  {
    id: 6,
    name: 'Es Teh Manis',
    description: 'Minuman segar pelengkap baso aci',
    price: 'Rp 5.000',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
    rating: 4.9,
    spicy: 0,
    bestseller: true
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-orange-400 text-sm font-semibold tracking-wide">
              MENU FAVORIT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Pilihan Menu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Terbaik
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Pilih menu favoritmu dan rasakan sensasi pedas yang bikin nagih!
          </motion.p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Best Seller Badge */}
                {item.bestseller && (
                  <motion.div
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full"
                  >
                    ⭐ Best Seller
                  </motion.div>
                )}

                {/* Spicy Level */}
                {item.spicy > 0 && (
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 + (i * 0.05), duration: 0.3 }}
                      >
                        <Flame
                          className={`w-4 h-4 ${
                            i < item.spicy
                              ? 'text-orange-500'
                              : 'text-slate-600'
                          }`}
                          fill={i < item.spicy ? 'currentColor' : 'none'}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.a
                    href="https://menu.pentolnona.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Pesan
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 text-orange-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {item.price}
                  </span>
                  <motion.a
                    href="https://menu.pentolnona.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors font-semibold text-sm"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Pesan Sekarang
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://menu.pentolnona.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Lihat Semua Menu
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
