import { Poppins, Roboto, Lora } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./globals.css";
import { Lora } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
});

// export const metadata = {
//   metadataBase: new URL("https://360eyecare.ca"),
//   title: "360 Eye Care - Your Complete Eye Care Solution in Toronto",
//   description:
//     "360 Eyecare provides comprehensive eye care services in Toronto. Expert optometrists offering eye exams, dry eye treatment, myopia control, diagnostics, and quality eyewear. Book your appointment today!",
//   keywords: [
//     "eye care",
//     "optometry",
//     "eye exam",
//     "Toronto",
//     "optometrist",
//     "eyewear",
//     "contact lenses",
//     "eye health",
//     "dry eye treatment",
//     "myopia control",
//   ],
//   authors: [{ name: "360 Eye Care" }],
//   viewport: "width=device-width, initial-scale=1, maximum-scale=5",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   verification: {
//     google: "your-google-verification-code",
//     yandex: "your-yandex-verification-code",
//     yahoo: "your-yahoo-verification-code",
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_CA",
//     url: "360-eye-care/public/360Logo.webp",
//     title: "360 Eye Care - Your Complete Eye Care Solution in Toronto",
//     description:
//       "360 Eyecare provides comprehensive eye care services in Toronto. Expert optometrists offering eye exams, dry eye treatment, myopia control, diagnostics, and quality eyewear. Book your appointment today!",
//     siteName: "360 Eye Care",
//     images: [
//       {
//         url: "360-eye-care/public/360Logo.webp",
//         width: 1200,
//         height: 630,
//         alt: "360 Eye Care - Your Complete Eye Care Solution",
//         type: "image/jpeg",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "360 Eye Care - Your Complete Eye Care Solution in Toronto",
//     description:
//       "360 Eyecare provides comprehensive eye care services in Toronto. Expert optometrists offering eye exams, dry eye treatment, myopia control, diagnostics, and quality eyewear. Book your appointment today!",
//     images: [
//       {
//         url: "360-eye-care/public/360Logo.webp",
//         alt: "360 Eye Care - Your Complete Eye Care Solution",
//       },
//     ],
//     creator: "@360eyecare",
//     site: "@360eyecare",
//   },
//   alternates: {
//     canonical: "https://360eyecare.ca",
//     languages: {
//       "en-CA": "https://360eyecare.ca",
//     },
//   },
//   category: "Healthcare",
//   classification: "Eye Care Services",
//   referrer: "origin-when-cross-origin",
//   other: {
//     "msapplication-TileColor": "#1B4B66",
//     "theme-color": "#1B4B66",
//   },
// };

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#28305F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="https://fonts.googleapis.com" as="style" />
        <link rel="preload" href="https://fonts.gstatic.com" as="style" />
      </head>
      <body
        className={`font-sans antialiased ${poppins.className} ${roboto.className} ${lora.className} overflow-x-hidden`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
