import "./globals.css";
import { Playfair_Display, Sora } from "next/font/google";
import Header from "@/components/general/header";
import MainProvider from "@/components/providers/main-provider";
import Footer from "@/components/general/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display", // Matches your CSS variable
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body",    // Matches your CSS variable
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sora.variable}`}>
      <body className="antialiased font-body bg-background text-foreground">
        <MainProvider>
            <Header />
            <main>{children}</main>
            <Footer />
        </MainProvider>
      </body>
    </html>
  );
}