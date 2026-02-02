import Head from "next/head";

interface MetaTagsProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogTitle?: string;
}

export function MetaTags({
  title,
  description,
  canonical = "https://www.bharathloganathan.dev",
  ogImage = "/mainthumbnail.PNG",
  ogTitle,
}: MetaTagsProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={ogTitle || title} />
      <link rel="canonical" href={canonical} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Bharath Loganathan" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1040" />
      <meta property="og:image:height" content="600" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="twitter:widgets:csp" content="on" />
    </Head>
  );
}
