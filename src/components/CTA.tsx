import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Clock } from 'lucide-react';

const CTA = () => {
  return (
    <section id="location" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 lg:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Lapar?{' '}
                  <span className="text-yellow-300">
                    Pesan Sekarang!
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg text-white/90 mb-8"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Jangan biarkan lapar mengganggu harimu! Pesan Baso Aci favoritmu sekarang dan nikmati sensasi pedas yang bikin nagih.
                </motion.p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Lokasi Kami
                      </p>
                      <p className="text-white/80 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Jl. Dempo, Sawah Lebar, Kota Bengkulu
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Jam Buka
                      </p>
                      <p className="text-white/80 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Setiap Hari: 10:00 - 22:00 WIB
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Kontak
                      </p>
                      <p className="text-white/80 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        WhatsApp: +62 812-3456-7890
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <motion.a
                    href="https://menu.pentolnona.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Pesan Sekarang
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Right - Map Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative"
              >
                <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/30 h-[400px]">
                  {/* Map Placeholder */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2947871234567!2d102.2678901!3d-3.7890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3456789abcdef0%3A0x123456789abcdef!2sJl.%20Dempo%2C%20Sawah%20Lebar%2C%20Kota%20Bengkulu!5e0!3m2!1sen!2sid!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  {/* Floating Badge */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-bold text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                          Pentol Nona
                        </p>
                        <p className="text-slate-600 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Jl. Dempo, Sawah Lebar, Kota Bengkulu
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
