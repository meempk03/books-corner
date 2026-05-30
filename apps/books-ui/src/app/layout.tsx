import type { Metadata } from "next";
import "./ui/globals.css";
import { geistSans, geistMono } from "./ui/fonts";
import Header from "./ui/header";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "Books Corner",
  description: "A place to discover and read books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <div className="bg-background bg-[radial-gradient(circle_at_top,rgba(255,210,120,0.08),transparent_35%)] text-primary min-h-screen flex flex-col">
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
