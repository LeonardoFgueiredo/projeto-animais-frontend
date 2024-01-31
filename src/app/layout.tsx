// import type { Metadata } from "next";
// import "../styles/globals.scss";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";


// export const metadata: Metadata = {
//   title: "Adoção",
//   description: "Adote animais",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="pt-br">
//       <Header/>
//       <body>{children}</body>      
//       <Footer/>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "../styles/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Adoção",
  description: "Adote animais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
