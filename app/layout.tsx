import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lungsom Lamnio | Next-Gen Portfolio",
  description: "Full Stack Developer & Creative Engineer",
  icons: {
    icon: "https://res.cloudinary.com/dgmftp80m/image/upload/v1771339042/My_Logo_fne0hl.png",
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
