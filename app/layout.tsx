import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAFA] text-[#111] max-w-[700px] mx-auto px-4">
        {/* Top navigation */}
        <nav className="flex justify-between py-4">
          <div className="flex space-x-4">
            <a href="/oracle">Oracle</a>
            <a href="/companion">Companion</a>
            <a href="/reputation">Reputation</a>
            <a href="/generator">Generator</a>
          </div>
          <button className="bg-[#5B4DF4] text-white px-3 py-1 rounded">
            Connect Wallet
          </button>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
