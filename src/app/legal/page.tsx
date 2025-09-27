export default function Legal() {
    return (
      <section className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Impressum & Datenschutz</h1>
  
        <h2 className="text-xl font-semibold mt-6">Impressum (Platzhalter)</h2>
        <p className="text-gray-600">
          Firma / Anschrift / Kontakt – wird später ergänzt.
        </p>
  
        <h2 id="privacy" className="text-xl font-semibold mt-6">Datenschutz (Kurzfassung)</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Datenverarbeitung nur zur Bereitstellung des Dienstes.</li>
          <li>Kinderfotos nur mit ausdrücklicher Zustimmung der Erziehungsberechtigten.</li>
          <li>DSGVO: Recht auf Auskunft/Löschung; kontaktierbar über Impressum.</li>
        </ul>
      </section>
    );
  }