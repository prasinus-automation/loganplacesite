'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Bio', path: '/bio' },
  { name: 'Resume', path: '/resume' },
  { name: 'Projects', path: '/projects' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 w-full flex justify-center z-50 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-2 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
        
        {/* Logo/Home Button */}
        <Link href="/bio" className="px-4 py-2 font-bold tracking-wider text-sm hover:text-blue-400 transition-colors">
          LOGAN.PLACE
        </Link>

        <div className="w-[1px] h-4 bg-white/20 mx-2" />

        {/* Links */}
        <div className="flex gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.path} href={item.path} className="relative px-4 py-2 text-sm font-medium transition-colors">
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={isActive ? "text-white" : "text-neutral-400 hover:text-white"}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}