import Link from "next/link";
import React from "react";

const NewsList = ({ news }) => {
  return (
    <ul className={"news-list"}>
      {news.map((el) => (
        <li key={el.slug}>
          <Link href={`/news/${el.slug}`}>
            <img src={`/images/news/${el.image}`} alt={el.title} />
            <span>{el.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
