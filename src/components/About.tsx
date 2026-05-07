import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 3, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl -z-10"
              ></motion.div>

              <motion.div
                animate={{
                  scale: [1, 0.95, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl -z-10"
              ></motion.div>

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
                  alt="Pentol Nona Kitchen"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <p className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      Dibuat dengan ❤️
                    </p>
                    <p className="text-slate-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Resep rahasia turun temurun
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
            >
              <Heart className="w-4 h-4 text-orange-500" />
              <span className="text-orange-400 text-sm font-semibold tracking-wide">
                CERITA NONA
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Dari Dapur{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Nona
              </span>
              {' '}untuk Kamu
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-slate-300 mb-8 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Pentol Nona hadir dengan cinta dan dedikasi untuk menyajikan Baso Aci terbaik di Kota Bengkulu. Setiap bola baso dibuat dengan bahan-bahan pilihan dan bumbu rahasia yang bikin kamu ketagihan.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-slate-300 mb-12 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Kami percaya bahwa makanan enak harus bisa dinikmati semua orang. Oleh karena itu, kami menyajikan Baso Aci premium dengan harga yang terjangkau, tanpa mengorbankan kualitas dan rasa.
            </motion.p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Kualitas Premium
                </h3>
                <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Bahan-bahan pilihan dan higienis
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Dibuat dengan Cinta
                </h3>
                <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Resep rahasia turun temurun
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Harga Terjangkau
                </h3>
                <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Enak tanpa bikin kantong kering
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
