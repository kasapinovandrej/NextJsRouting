import { getAllNews } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const SingleNewsPage = async ({ params }) => {
  const { newsId } = await params;
  const news = await getAllNews();
  const newsItem = news.find((el) => el.slug === newsId);

  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default SingleNewsPage;
