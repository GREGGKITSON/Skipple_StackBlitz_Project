import "./globals.css";
import InitBuilder from "./InitBuilder";
import TopTabs from "../components/TopTabs"; // adjust path if your folder differs

export const metadata = {
  title: "Skipple",
  description: "Skip hire, simplified",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Viewport for proper scaling on mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-white text-black">
        <InitBuilder />
        <TopTabs />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
