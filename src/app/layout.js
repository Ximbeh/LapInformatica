import localFont from "next/font/local";
import "../styles/globals.css";

const inter = localFont({
  src: "../../public/fonts/Inter.ttf",
  variable: "--inter",
  weight: "400",
});


export const metadata = {
  title: "Lap Informatica",
  description: "Softwere para entregas leves e rapidas!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} antialiased font-[family-name:var(--inter)]`}
      >
        {children}
      </body>
    </html>
  );
}
