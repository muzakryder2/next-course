"use client";

import { use } from "react";
import Link from "next/link";

// Client component
export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>
        Reading in{" "}
        {lang === "en" ? "English" : lang === "es" ? "Spanish" : "French"}
      </p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}

// Uncomment and add 'use client' for server component version
// export default async function NewsArticle({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ articleId: string }>;
//   searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
// }) {
//   const { articleId } = await params;
//   const { lang = "en" } = await searchParams;

//   return (
//     <div>
//       <h1>News Article {articleId}</h1>
//       <p>
//         Reading in{" "}
//         {lang === "en" ? "English" : lang === "es" ? "Spanish" : "French"}
//       </p>

//       <div>
//         <Link href={`/articles/${articleId}?lang=en`}>English</Link>
//         <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
//         <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
//       </div>
//     </div>
//   );
// }
