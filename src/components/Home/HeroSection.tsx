import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="h-screen flex items-center relative overflow-hidden px-8 pt-8">
      <BgAccent />
      <Image
        alt=""
        src="/images/hero.png"
        width={2000}
        height={2000}
        className="object-contain absolute top-0 right-28 z-10 w-[700px] h-[700px]"
      />
      <div className="flex flex-col relative">
        <h1 className="text-7xl font-bold text-neutral-100 w-[700px] leading-[80px]">
          Perjalanan Nyaman dengan Kendaraan Pilihan
        </h1>
        <p className="text-base text-neutral-300 w-[500px] mt-4">
          Nikmati proses pemesanan cepat dan layanan yang ramah, membuat
          perjalanan Anda lebih mudah dan menyenangkan.
        </p>
        <Link
          href="#"
          className="bg-blue-800 px-8 py-2 mt-8 rounded-lg w-fit text-neutral-50 font-medium shadow-[0_0_25px_10px] shadow-blue-800/80"
        >
          Buka Katalog
        </Link>
        <div className="flex items-center gap-x-8 mt-14 text-neutral-50">
          <div className="space-y-2 p-4 bg-gradient-to-tr from-neutral-900 to-neutral-800 rounded-lg">
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-sm text-neutral-300">Pilihan mobil dan motor</p>
          </div>
          <div className="space-y-2 p-4 bg-gradient-to-tr from-neutral-900 to-neutral-800 rounded-lg">
            <h2 className="text-4xl font-bold">2K+</h2>
            <p className="text-sm text-neutral-300">Client merasa puas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BgAccent() {
  return (
    <>
      <div className="bg-white opacity-10 absolute -top-40 -left-40 w-[450px] h-[450px] blur-3xl rounded-full" />
      <div className="bg-white opacity-10 absolute -bottom-40 -right-40 w-[450px] h-[450px] blur-3xl rounded-full" />
      <div className="bg-gradient-to-t to-neutral-900 via-blue-950 from-blue-950 opacity-30 z-0 h-screen w-96 absolute inset-0 mx-auto" />
    </>
  );
}
