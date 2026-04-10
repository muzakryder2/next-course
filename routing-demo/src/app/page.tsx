import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/products">Products</Link>
      <div className="my-4 flex flex-col gap-1">
        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=es">Read in Spanish</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      </div>
    </>
  );
}
