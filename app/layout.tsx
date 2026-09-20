import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forevercalculated | AI-Powered Remote Career Support",
  description:
    "AI career tools and expert 1-on-1 support to help you land your dream remote job. CV rewrites, interview prep, and job leads.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
