import Clarity from "@/components/Clarity";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "OP Bento",
  description: "Create cool bento grids for your Github Readme!",
  metadataBase: new URL("https://opbento.edgexhq.tech"),
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {process.env.NODE_ENV === "production" ? <Clarity /> : null}
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Toaster richColors />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <footer className="mt-12 mb-4">
      <p className="text-center text-muted-foreground">
        Made with ❤️ by{" "}
        <a href="/about" className="text-red-300 hover:underline">
          @RealDevs
        </a>
      </p>
    </footer>
  );
};
