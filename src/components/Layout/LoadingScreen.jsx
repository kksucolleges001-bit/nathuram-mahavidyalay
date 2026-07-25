import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800; // 1.8 seconds simulation
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 200); // Pause briefly at 100% before graceful fade out
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const getStatusText = (val) => {
    if (val < 35) return "Initializing Campus Portal...";
    if (val < 75) return "Loading Academic Resources...";
    return "Welcome to SNMM...";
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 flex flex-col items-center justify-center overflow-hidden px-4"
        >
          {/* Animated Background Glowing Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [-20, 20, -20],
              y: [-10, 15, -10],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [20, -20, 20],
              y: [15, -10, 15],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
          />

          {/* Center Emblem Container with Rotating Rings */}
          <div className="relative flex items-center justify-center mb-8 w-56 h-56 md:w-64 md:h-64">
            {/* Outer Rotating Dashed Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[3px] border-dashed border-blue-400/40 dark:border-blue-500/30 w-full h-full"
            />

            {/* Inner Counter-Rotating Gradient Arc */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-3 rounded-full border-2 border-transparent border-t-emerald-500 border-r-blue-600 dark:border-t-emerald-400 dark:border-r-blue-400 opacity-85"
            />

            {/* Soft Glowing Pedestal */}
            <div className="absolute inset-6 bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-full shadow-2xl border border-white/90 dark:border-gray-700/60 flex items-center justify-center p-4">
              {/* Pulsing College Logo */}
              <motion.img
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Shri Nathuram Maharaj Mahavidyalaya Logo"
                className="w-32 h-32 md:w-36 md:h-36 object-contain filter drop-shadow-md z-10"
              />
            </div>
          </div>

          {/* Branding Typography */}
          <div className="text-center max-w-lg z-10 mb-8">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-2xl font-extrabold font-poppins tracking-tight bg-gradient-to-r from-blue-700 via-teal-600 to-emerald-600 dark:from-blue-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent mb-1.5"
            >
              Shri Nathuram Maharaj Mahavidyalaya
            </motion.h1>
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-gray-500 dark:text-gray-400 uppercase">
              Excellence in Education
            </p>
          </div>

          {/* Dynamic Progress Bar */}
          <div className="w-64 md:w-80 z-10">
            <div className="h-2.5 w-full bg-gray-200/80 dark:bg-gray-800 rounded-full overflow-hidden p-0.5 shadow-inner backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 rounded-full shadow-sm"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Live Status & Counter */}
            <div className="flex justify-between items-center mt-2.5 px-1 text-xs font-medium text-gray-600 dark:text-gray-400">
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1"></span>
                <span>{getStatusText(progress)}</span>
              </span>
              <span className="font-bold text-blue-600 dark:text-blue-400 font-mono text-xs">{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;