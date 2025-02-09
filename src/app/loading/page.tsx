'use client';

import { motion } from 'framer-motion';

const Loader= () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="text-lg font-semibold text-gray-700 mb-4">Loading...</p>
      <div className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="w-32 h-1 bg-blue-500 rounded"
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut', delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader
