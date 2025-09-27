import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <div className="max-w-2xl">
        <Image
          src="/logo.svg"
          alt="MyStory"
          width={96}
          height={96}
          priority
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Willkommen bei MyStory 🚀</h1>
        <p className="text-lg text-gray-600 mb-8">
          Interaktive KI-Geschichten für Eltern & Kinder – personalisiert, spannend und kindgerecht.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h2 className="text-xl font-semibold">👦 Personalisierung</h2>
            <p className="text-sm text-gray-500">
              Dein Kind als Held der Geschichte – mit eigenem Avatar.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">📖 Bildung & Spaß</h2>
            <p className="text-sm text-gray-500">
              Spielerisch Kreativität und Sprachentwicklung fördern.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">🎧 Vorlesen lassen</h2>
            <p className="text-sm text-gray-500">
              Mit natürlichen KI-Stimmen oder eurer eigenen Stimme.
            </p>
          </div>
        </div>

        {/* Optional: CTA später per Link */}
      </div>
    </main>
  );
}