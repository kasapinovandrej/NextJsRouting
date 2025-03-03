import { getLatestNews } from "@/lib/news";
import React from "react";
import NewsList from "@/components/NewsList/NewsList";

// zato sto ne podrzavam 'nested year route' u ovoj paralelnoj ruti, dodajem 'default.jsx' a ne 'page.jsx' file da ne bi bila undefined nested [year] ruta (na reload)

const LatestNewsPage = async () => {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestNewsPage;
