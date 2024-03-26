import "./globals.scss";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Roboto } from "next/font/google";
import { theme } from "./theme/dark";
import { ThemeProvider } from "@mui/material/styles";

const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Loded Frezeer",
  description: "An app that tracks general expenses and chores for the flat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <main className="app">
              <div className="header">
                Heading
              </div>
              <div className="content">{children}</div>
            </main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
