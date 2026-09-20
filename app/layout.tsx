import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Shanmugavel M | Founder and Full Stack Developer of Shanmugavel Book Universe and Food Psycho, Author, Narrator, Publisher",
  description:
    "Shanmugavel M is a founder, full stack developer, author, narrator, and publisher building Book Universe and Food Psycho.",
  icons: { icon: "/logo.png" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shanmugavel M",
  jobTitle: "Founder and Full Stack Developer",
  description:
    "Founder, full stack developer, author, narrator, and publisher.",
  image: "/founder.jpg",
  sameAs: ["https://foodpsycho.vercel.app"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
