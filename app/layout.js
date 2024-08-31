import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "CDC - Creative Design & Construction", // Used in documentation to set the HTML <title> tag
  description:
    "Construction Company to do service provide in Residintial and commercial", // Used in documentation to set the HTML <meta> tag
  metadataBase: new URL("https://cdc.construction"), // Set this to your production URL
  generator: "Creative Design & Construction",
  applicationName: "Creative Design & Construction",
  alternates: {
    canonical: `https://cdc.construction`,
  },
  keywords: [
    "Renovation",
    "Loft Conversion",
    "Residential",
    "Commercial",
    "Property",
    "Construction", // Add your keywords here
    "Planning Application",
  ], // we have to research  more about SEO and add relevant keywords here
  openGraph: {
    title: "Constructing Dreams, Building Futures",
    description:
      "Creative design and construction services for commercial and residential projects in the UK.",
    url: "https://cdc.construction",
    siteName: "Creative  Design & Construction",
    images: "/og-image.jpg",
    local: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Design & Construction",
    description:
      "Creative design and construction services for commercial and residential projects in the UK",
    site: "https://cdc.construction",
    creator: "@cdc",
    images: ["https://cdc.construction/og-image.jpg"], // Must be an absolute URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
