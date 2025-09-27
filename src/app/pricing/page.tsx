export default function Pricing() {
    return (
      <section className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Preise</h1>
  
        <div className="border rounded p-4 mb-4">
          <h2 className="text-xl font-semibold">Gratis</h2>
          <p className="text-gray-600">1–2 Geschichten/Monat</p>
        </div>
  
        <div className="border rounded p-4">
          <h2 className="text-xl font-semibold">Premium</h2>
          <p className="text-gray-600">9,99–14,99 € / Monat: unbegrenzt, TTS, mehrere Charaktere</p>
        </div>
  
        <a href="/try" className="inline-block mt-6 px-5 py-3 bg-blue-600 text-white rounded">
          Jetzt ausprobieren
        </a>
      </section>
    );
  }