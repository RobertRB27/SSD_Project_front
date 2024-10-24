import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "SSD Project",
  description: "Proyecto final Sistemas de Soporte a la Decisión",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col">
            {/* <div className="flex-1 w-full flex flex-col gap-20 items-center bg-yellow-400"></div> */}
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <p className="text-xl sm:block hidden">Proyecto SSD</p> 
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <HeaderAuth />
                    <span className="ml-4 sm:block hidden">Tema:</span>
                    <div className="ml-2">
                      <ThemeSwitcher />
                    </div>
                  </div>
                </div>
              </nav>
              <div className="flex flex-col gap-20 w-full p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  All rights reserved{" "}
                  <a
                    href="https://www.roberto-robles.com"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Roberto Robles
                  </a>
                </p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
