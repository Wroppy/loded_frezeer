import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Loded Frezeer",
  description: "An app that tracks general expenses and chores for the flat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
