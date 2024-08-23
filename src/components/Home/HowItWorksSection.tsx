import { CaraKerjaList } from '@/lib/const';
import Image from 'next/image';

export default function HowItWorksSection() {
  return (
    <div className="bg-neutral-900 relative h-screen overflow-hidden flex items-center justify-center px-8">
      <div>
        <div className="text-center">
          <p className="text-sm font-bold uppercase text-neutral-500">
            Cara Kerja
          </p>
          <h1 className="text-3xl font-bold text-neutral-50 mb-12">
            Sewa Kendaraan dengan 3 Langkah Mudah
          </h1>
        </div>
        <div className="flex items-start justify-center gap-x-8">
          <CaraKerja />
        </div>
      </div>
    </div>
  );
}

function CaraKerja() {
  return (
    <>
      {CaraKerjaList.map((cara, index) => (
        <div
          className="w-64 flex flex-col items-center text-center z-10"
          key={index}
        >
          <div className="shadow-[0_0_25px_15px] shadow-neutral-500/10 hover:shadow-blue-800/80 rounded-xl p-10 group bg-neutral-900 hover:bg-blue-800 transition-[box-shadow,background-color] duration-300 ease-in-out">
            <Image
              alt={cara.title}
              src={cara.icon}
              width={200}
              height={200}
              className="size-12 object-contain group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
          <h1 className="text-lg font-medium text-neutral-100 mt-7 mb-2">
            {cara.title}
          </h1>
          <p className="text-sm text-neutral-400">{cara.desc}</p>
        </div>
      ))}
    </>
  );
}
