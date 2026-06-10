import type { Metadata } from "next";

export const siteConfig = {
  name: "Saiitek Solution",
  legalName: "Saiitek Solution Pvt. Ltd.",
  description:
    "Saiitek provides innovative healthcare technology solutions including PACS, RIS, AI-powered tools, and HIS automation. Streamline medical imaging, optimize clinical workflows, improve diagnostic efficiency, and enhance patient care with secure and reliable digital healthcare platforms.",
  keywords: [
    "Saiitek",
    "healthcare technology",
    "PACS",
    "RIS",
    "HIS automation",
    "healthcare software",
    "medical imaging",
    "radiology information system",
    "picture archiving and communication system",
    "AI healthcare tools",
    "hospital information system",
    "digital healthcare solutions",
    "diagnostic workflow",
    "healthcare IT",
    "medical technology",
    "Nepal healthcare software",
  ],
  url: "https://saiitek.com.np",
  ogImage: "/img/saaitekremove.png",
  email: "paarisha@saiitek.com.np",
  phone: "+9779705384904",
  address: {
    street: "Thasikhel",
    locality: "Lalitpur",
    country: "Nepal",
  },
} as const;

export const siteRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/projects", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/team", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.8 },
  {
    path: "/testimonials",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.8 },
];

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = `${siteConfig.url}${path === "/" ? "" : path}`;
  const displayTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: displayTitle,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  icons: {
    icon: "/img/favicon.ico",
    apple: "/img/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};
