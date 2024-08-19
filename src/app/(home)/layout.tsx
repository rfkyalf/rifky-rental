import Navbar from '@/components/Navbar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-neutral-900 h-screen">
      <Navbar />
      {children}
    </main>
  );
}
