import NavBar from "./_components/navigation/navbar";
import Footer from "./_components/navigation/footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <main className="pt-32 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}