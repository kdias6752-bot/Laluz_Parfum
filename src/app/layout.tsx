import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Luz Parfum",
  description: "Catalogo de Perfumes Arabes - Decants & Frascos Originais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
