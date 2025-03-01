import { DUMMY_NEWS } from "@/DUMMY_NEWS";
import { notFound } from "next/navigation";
import React from "react";

const ImagePreviewPage = async ({ params }) => {
  const { newsId } = await params;

  const newsItem = DUMMY_NEWS.find((el) => el.slug === newsId);

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
