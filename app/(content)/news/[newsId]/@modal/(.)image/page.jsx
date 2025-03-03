import ModalBackdrop from "@/components/ModalBackdrop/ModalBackdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import React from "react";

const InterceptedImagePreviewPage = async ({ params }) => {
  const { newsId } = await params;
  const newsItem = await getNewsItem(newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={"100%"}
          />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePreviewPage;
