import { DM_Sans, Inter } from "next/font/google";
import global from "../styles/global.css";
import Navbar from "./_components/partials/Navbar";
import Footer from "./_components/partials/Footer";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="overflow-x-hidden">
            <body className={`${dm_sans.className}`}>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
