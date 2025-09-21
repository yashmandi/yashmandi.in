import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // you can adjust weights
});

export const metadata: Metadata = {
  title: "yash mandi",
  description: "yash mandi - personal website",
  icons: {
    icon: "/yash-icon-circle.png", // path to your icon in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} style={{ fontSize: "13.5px" }}>
        {children}
      </body>
    </html>
  );
}