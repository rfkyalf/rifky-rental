import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed z-50 px-8 py-6 w-full">
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
