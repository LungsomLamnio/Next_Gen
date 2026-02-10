import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lungsom Lamnio | Next-Gen Portfolio",
  description: "Full Stack Developer & Creative Engineer",
  icons: {
    icon: "https://res.cloudinary.com/dgmftp80m/image/upload/v1764432799/logo_1.40_Background_Removed.17_AM_lg8mro.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-black text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
