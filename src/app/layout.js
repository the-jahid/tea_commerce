
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/mui_theme";
import Navbar from "@/components/shared_components/Navbar";
import { CssBaseline } from "@mui/material";
import { ReduxProvider } from "@/store";
import Footer from "@/components/shared_components/footer";
import { ClerkProvider } from '@clerk/nextjs';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tea Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <ReduxProvider>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <body className={inter.className}>
            <CssBaseline />
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </ThemeProvider>
    </ReduxProvider>
    </ClerkProvider>

  );
}
