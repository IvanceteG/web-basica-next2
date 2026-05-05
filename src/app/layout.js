import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Web amb Next.js",
  description: "Exercici App Router + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ca">
       <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}