import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Roboto } from "next/font/google";
import { theme } from "./theme/dark";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "@/app/components/navbar/navbar";

const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Loded Frezeer",
  description: "An app that tracks general expenses and chores for the flat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true, key: "css" }}>
          <ThemeProvider theme={theme}>
            <main className="app">
              <div className="header">
                <Navbar />
              </div>
              <div className="content">{children}</div>
            </main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
