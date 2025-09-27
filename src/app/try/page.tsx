import Link from "next/link";
import AvatarUploader from "@/components/AvatarUploader";

export default function Try() {
  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2 text-center">Los geht’s!</h1>
      <p className="mb-6 text-center text-gray-600">
        Schritt 1: Wähle ein Foto und sieh dir die Vorschau an. (Keine Speicherung im MVP)
      </p>

      {/* Wichtig: KEINE Funktion als Prop übergeben */}
      <AvatarUploader maxSizeMB={5} />

      <div className="text-center mt-8">
        <Link href="/" className="text-blue-600 underline">Zur Startseite</Link>
      </div>
    </section>
  );
}