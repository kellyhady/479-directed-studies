import "./globals.css";

import { Inter } from "next/font/google";
import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });
const picaflor = localFont({ src: "../../public/fonts/Picaflor-48pt.otf" });
const helveticaroman = localFont({
  src: "../../public/fonts/helvetica.woff",
});
const helveticabold = localFont({
  src: "../../public/fonts/helvetica-bold.woff",
});
const ortica = localFont({
  src: "../../public/fonts/OrticaLinear-Light.woff",
});

const orticabold = localFont({
  src: "../../public/fonts/OrticaLinear-Bold.woff",
});

export const metadata = {
  title: "479 Directed Studies",
  description: "created by kk.hady",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}
