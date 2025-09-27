export default function Navbar() {
    return (
      <header className="w-full border-b">
        <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <a href="/" className="font-bold text-lg">MyStory</a>
          <div className="flex gap-4 text-sm">
            <a href="/about">Über</a>
            <a href="/pricing">Preise</a>
            <a href="/legal">Impressum & Datenschutz</a>
          </div>
        </nav>
      </header>
    );
  }