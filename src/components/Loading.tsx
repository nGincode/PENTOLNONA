import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-orange-500/30 rounded-full"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>

        {/* Inner ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-14 h-14 border-4 border-red-500/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>

        {/* Center text */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500 font-bold text-sm"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          P
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
