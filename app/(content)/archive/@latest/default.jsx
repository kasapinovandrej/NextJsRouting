import { getLatestNews } from "@/lib/news";
import React from "react";
import NewsList from "@/components/NewsList/NewsList";

// zato sto ne podrzavam 'nested year route' u ovoj paralelnoj ruti, dodajem 'default.jsx' a ne 'page.jsx' file da ne bi bila undefined nested [year] ruta (na reload)

const LatestNewsPage = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>LatestNewsPage</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestNewsPage;
