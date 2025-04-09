import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Next oefening",
  description: "Applicatie met Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 max-w-7xl mx-auto mt-10">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
