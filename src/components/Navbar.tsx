import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">MyStory</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/about">Über</Link>
          <Link href="/pricing">Preise</Link>
          <Link href="/legal">Impressum & Datenschutz</Link>
        </div>
      </nav>
    </header>
  );
}