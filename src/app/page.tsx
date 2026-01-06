'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <motion.main 
      className="h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden cursor-pointer relative"
      onClick={() => router.push('/bio')}
      exit={{ opacity: 0 }}
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="z-10 text-center space-y-4"
      >
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
          LOGAN
        </h1>
        
        <motion.div 
          className="flex items-center justify-center gap-2 text-neutral-500 text-sm uppercase tracking-[0.3em]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
          Click to Initialize
        </motion.div>
      </motion.div>
    </motion.main>
  );
}