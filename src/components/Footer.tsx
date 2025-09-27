export default function Footer() {
    return (
      <footer className="w-full border-t mt-16">
        <div className="max-w-5xl mx-auto p-4 text-xs text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} MyStory</span>
          <div className="flex gap-3">
            <a href="/legal">Impressum</a>
            <a href="/legal#privacy">Datenschutz</a>
          </div>
        </div>
      </footer>
    );
  }