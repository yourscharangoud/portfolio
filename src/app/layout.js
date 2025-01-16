import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yours Charan Goud",
  description: "My Name is Charan | A Cool Guy with lot of Enthusiasm in Entrepreneurship and Technology. Dreaming big Embracing the journey with laid-back charm.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}>
        {children}
      </body>
    </html>
  );
}
