import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import React from "react";

const ImagePreviewPage = async ({ params }) => {
  const { newsId } = await params;
  // const news = await getAllNews();
  // const newsItem = news.find((el) => el.slug === newsId);
  const newsItem = await getNewsItem(newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePreviewPage;
