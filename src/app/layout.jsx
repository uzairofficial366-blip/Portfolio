import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Uzair Khattak | AI Engineer & NLP Specialist",
  description: "AI Engineer specializing in NLP, Deep Learning, LLMs, LangChain & RAG. Researching Urdu AI Models. CS Graduate from Islamia College Peshawar.",
  keywords: ["AI Engineer", "NLP", "Deep Learning", "LangChain", "RAG", "LLMs", "Urdu AI", "Machine Learning", "Muhammad Uzair Khattak"],
  authors: [{ name: "Muhammad Uzair Khattak" }],
  openGraph: {
    title: "Muhammad Uzair Khattak | AI Engineer & NLP Specialist",
    description: "Building Intelligent Systems with LLMs, LangChain & RAG. Researching Urdu AI Models.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LoadingScreen />
        <main>{children}</main>
      </body>
    </html>
  );
}
