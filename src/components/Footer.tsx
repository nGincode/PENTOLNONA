import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Pentol Nona
              </h3>
              <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Baso Aci Juara, Pedasnya Bikin Nagih!
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Rasakan sensasi pedas yang bikin nagih! Baso Aci premium dengan bumbu rahasia yang bikin kamu ketagihan.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Menu Cepat
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-slate-400 hover:text-orange-500 transition-colors text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-orange-500 transition-colors text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#menu" className="text-slate-400 hover:text-orange-500 transition-colors text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Menu
                </a>
              </li>
              <li>
                <a href="https://menu.pentolnona.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-500 transition-colors text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Pesan Online
                </a>
              </li>
              <li>
                <a href="#location" className="text-slate-400 hover:text-orange-500 transition-colors text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Lokasi
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Kontak Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Jl. Dempo, Sawah Lebar, Kota Bengkulu
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    +62 812-3456-7890
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    info@pentolnona.com
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Jam Buka
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Setiap Hari
                  </p>
                  <p className="text-slate-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    10:00 - 22:00 WIB
                  </p>
                </div>
              </li>
            </ul>
            {/* Mini Map */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2947871234567!2d102.2678901!3d-3.7890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3456789abcdef0%3A0x123456789abcdef!2sJl.%20Dempo%2C%20Sawah%20Lebar%2C%20Kota%20Bengkulu!5e0!3m2!1sen!2sid!4v1234567890123"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
              © {new Date().getFullYear()} Pentol Nona. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Made with primarasaselaras{' '}
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              {' '}in Bengkulu
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
