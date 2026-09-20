import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shanmugavel M | Founder - Book Universe, Food Psycho | Author",
  description: "Shanmugavel M - Founder and Product Owner of Book Universe and Food Psycho. Author, Narrator of Gun Story. Masters in Electronics building worlds where you can get lost and found.",
  metadataBase: new URL("https://shanmugavel-m.vercel.app"),
  openGraph: {
    title: "Shanmugavel M | Founder - Book Universe",
    description: "Founder of Book Universe and Food Psycho. Author, Narrator, Publisher and storyteller.",
    url: "https://shanmugavel-m.vercel.app",
    siteName: "Shanmugavel M",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Shanmugavel M Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanmugavel M",
    description: "Founder of Book Universe and Food Psycho",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shanmugavel M",
    url: "https://shanmugavel-m.vercel.app",
    image: "https://shanmugavel-m.vercel.app/founder.jpg",
    jobTitle: "Founder",
    worksFor: [
      { "@type": "Organization", name: "Book Universe" },
      { "@type": "Organization", name: "Food Psycho" }
    ],
    sameAs: [
      "https://www.instagram.com/___shanmugavel___850/",
      "https://www.linkedin.com/in/shanmugavel-m-324a601b2/",
      "https://github.com/Shanmuga850/",
      "https://x.com/shanmugavel850",
      "https://www.youtube.com/@THEBLUEWHALEOFFICAL"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}