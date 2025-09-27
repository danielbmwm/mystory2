"use client";

import { useRef, useState } from "react";

type Props = {
  maxSizeMB?: number;           // z.B. 5
  onValidSelect?: (file: File) => void; // optionaler Callback
};

export default function AvatarUploader({ maxSizeMB = 5, onValidSelect }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePickClick = () => {
    inputRef.current?.click();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // 1) Typ prüfen
    if (!file.type.startsWith("image/")) {
      setError("Bitte wähle eine Bilddatei (jpg, png, webp).");
      setPreview(null);
      return;
    }

    // 2) Größe prüfen
    const maxBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxBytes) {
      setError(`Datei zu groß. Max. ${maxSizeMB} MB erlaubt.`);
      setPreview(null);
      return;
    }

    // 3) Vorschau setzen (lokal)
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
      onValidSelect?.(file);
    };
    reader.readAsDataURL(file);
  };

  const handleClear = () => {
    setPreview(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Avatar erstellen (Schritt 1/3)</h3>
        <p className="text-sm text-gray-600 mb-4">
          Wähle ein Foto (jpg, png, webp, max. {maxSizeMB} MB). Das Bild wird nur lokal angezeigt.
        </p>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />

        {!preview ? (
          <button
            onClick={handlePickClick}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Foto auswählen
          </button>
        ) : (
          <div className="space-y-3">
            <img
              src={preview}
              alt="Vorschau"
              className="w-48 h-48 object-cover rounded mx-auto border"
            />
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handlePickClick}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Anderes Foto wählen
              </button>
              <button
                onClick={handleClear}
                className="px-4 py-2 border rounded hover:bg-gray-50 transition"
              >
                Entfernen
              </button>
            </div>
          </div>
        )}

        {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Hinweis: Im MVP wird das Foto nicht hochgeladen oder gespeichert.
      </p>
    </div>
  );
}