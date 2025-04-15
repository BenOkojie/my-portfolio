// layout.tsx
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* this is fine even though it's a client component */}
        <main>{children}</main>
      </body>
    </html>
  );
}
