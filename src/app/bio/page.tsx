'use client';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';

export default function Bio() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white selection:bg-blue-500/30">
      <NavBar />

      {/* Background Gradient Blob - Fixed position */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <motion.div 
          initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl w-full"
        >
          {/* Main Card with Glassmorphism styles applied inline */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-8 md:p-12 rounded-3xl">
            
            {/* Tagline */}
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">
              AVAILABLE FOR HIRE
            </span>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Designing the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white animate-gradient-bg">
                digital future.
              </span>
            </h1>

            {/* Bio Body */}
            <div className="grid md:grid-cols-3 gap-8 text-neutral-400 leading-relaxed">
              <div className="md:col-span-2 text-lg space-y-4">
                <p>
                  I'm <strong className="text-white">Logan</strong>, a Full Stack Engineer specialized in building high-performance web applications.
                </p>
                <p>
                  With a background in <span className="text-white">Django, React, and Rails</span>, I bridge the gap between heavy backend logic and fluid frontend interactivity. I don't just write code; I craft systems that scale.
                </p>
              </div>
              
              {/* Stats / Tech Stack Mini-Column */}
              <div className="space-y-4 border-l border-white/10 pl-6">
                <div>
                  <h3 className="text-white font-medium mb-1">Stack</h3>
                  <p className="text-sm">Next.js, TypeScript, Python, AWS</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Focus</h3>
                  <p className="text-sm">Interactive UI, Scalable Backends</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Location</h3>
                  <p className="text-sm">Detroit, MI</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                Download Resume
              </button>
              <button className="px-8 py-3 bg-white/5 text-white border border-white/10 font-medium rounded-full hover:bg-white/10 transition-colors">
                View Projects
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

