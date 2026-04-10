import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TopBar from "@/components/layout/Topbar";

export const metadata = {
  title: "DNA DS Research Lab",
  description: "Biotechnology Research & Innovation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
     <TopBar />
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        {children}

        {/* Footer */}
        <Footer /> 

      </body>
    </html>
  );
}