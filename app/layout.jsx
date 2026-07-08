import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata = {
  title: {
    default: "Earthion Tech — Hydrogen Fuel Systems for DG Sets & Diesel Vehicles",
    template: "%s | Earthion Tech",
  },
  description:
    "Earthion delivers Controlled Hydrogen Fuel Assist (CHFA) retrofit systems for diesel generators and vehicle fleets. NABL-validated fuel savings of 5–22% and particulate matter reduction up to 80%. Made in India.",
  keywords: [
    "hydrogen fuel assist", "CHFA", "DG set decarbonisation", "HHOx", "GreenDrive",
    "diesel vehicle fuel savings", "fleet decarbonisation", "NABL emission testing",
    "Earthion Tech", "defence logistics fuel", "Mumbai green tech",
  ],
  openGraph: {
    siteName: "Earthion Tech",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={dmSans.className} style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
