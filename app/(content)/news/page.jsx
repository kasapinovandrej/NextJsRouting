import React from "react";
import NewsList from "@/components/NewsList/NewsList";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  // OVAKO BIH ZVAO EXTERNI SERVER U SSR KOMPONENTI
  // const response = await fetch(`http://localhost:8080/news`);
  // if (!response.ok) {
  //   throw new Error("Failed to fetch news.");
  // }
  // const data = await response.json();

  // OVAKO AKO JE BAZA U LOKALU
  const data = await getAllNews();

  return (
    <div>
      <h1>NewsPage</h1>
      <NewsList news={data} />
    </div>
  );
};

export default NewsPage;
