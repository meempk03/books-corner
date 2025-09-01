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
        <div className="min-h-screen flex flex-col bg-oxfordblue text-green-50">
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
