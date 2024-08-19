export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-neutral-900 h-screen">{children}</main>;
}
