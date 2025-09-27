
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MyStory – Interaktive KI-Geschichten",
  description: "Personalisierte Geschichten für Kinder – mit Vorlesefunktion.",
  openGraph: { title: "MyStory", description: "Interaktive KI-Geschichten" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}