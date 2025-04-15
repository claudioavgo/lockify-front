import Topbar from "./_components/navigation/topbar";
import Footer from "./_components/navigation/footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Topbar />
      <main className="pt-32 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}