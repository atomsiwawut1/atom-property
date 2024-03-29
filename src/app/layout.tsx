import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../provider/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import LayoutProvider from "../provider/layout-provider";

export const metadata: Metadata = {
  title: "Shey Properties",
  description: "Onestop for all your property needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};