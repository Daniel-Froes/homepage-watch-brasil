import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../src/components/organisms/Header";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "WATCH BRASIL",
  description: "Festival de música com os melhores artistas do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} antialiased`}>
        <Header 
          logoSrc="/logo.svg" 
          logoAlt="W Festival"
        />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
