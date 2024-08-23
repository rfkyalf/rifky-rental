'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setScrollDirection('up'); // Menampilkan navbar saat di bagian paling atas
      } else if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 px-8 py-6 w-full transition-all duration-500 ${
        isScrolled ? 'bg-black/40 backdrop-blur-lg' : 'bg-transparent'
      } ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-neutral-50">
          Rifky<span className="text-blue-600">Rental</span>
        </h1>
        <div className="text-base font-bold text-neutral-50 space-x-8">
          <Link href="#">Home</Link>
          <Link href="#">Tentang Kami</Link>
          <Link href="#">Katalog</Link>
          <Link href="#">Hubungi Kami</Link>
        </div>
        <div className="flex items-center gap-x-8">
          <Link href="#" className="text-3xl text-rose-700">
            ❤
          </Link>
          <Image
            alt=""
            src="/images/profile.jpg"
            width={500}
            height={500}
            className="size-10 object-cover rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}
