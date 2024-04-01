import { Navbar } from "@/components";

export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <span className="text-lg">Hello Root Layout General</span>
        {children}
      </main>
    </>
  );
}