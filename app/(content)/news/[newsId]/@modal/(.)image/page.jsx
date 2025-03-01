"use client";
import { DUMMY_NEWS } from "@/DUMMY_NEWS";
import { notFound, useRouter } from "next/navigation";
import React from "react";

const InterceptedImagePreviewPage = async ({ params }) => {
  const { back } = useRouter();

  const { newsId } = await params;

  const newsItem = DUMMY_NEWS.find((el) => el.slug === newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={back} />
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
