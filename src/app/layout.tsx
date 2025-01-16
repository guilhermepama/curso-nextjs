import "./globals.css";
import NavHeader from "./components/header";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Aula Next JS do zero!",
  description: "Aprendendo Next JS do zerro",
  keywords: "nextjs, react, javascript, typescript",
  openGraph: {
      title: "Home - Aula Next JS do zero!",
      description: "Aprendendo Next JS do zerro",
  },

  robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
          index: true,
          follow: true,
      },
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        <NavHeader /> 
        {children}
      </body>
    </html>
  );
}
