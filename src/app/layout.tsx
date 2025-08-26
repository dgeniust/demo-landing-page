import type { Metadata } from "next";
import { Roboto_Slab  } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";


const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MeeJob",
  description: "Website tìm kiếm việc làm tại Việt Nam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSlab.variable} antialiased min-h-screen w-full flex flex-col bg-gray-50`}
      >
        {/* Header */}
        <Header />
          {/* Content */}
          <main className="flex-1 w-full h-full bg-white">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}