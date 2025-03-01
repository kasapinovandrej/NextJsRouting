import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { DUMMY_NEWS } from "@/DUMMY_NEWS";
import Image from "next/image";
import NewsList from "@/components/NewsList/NewsList";

const NewsPage = () => {
  return (
    <div>
      <h1>NewsPage</h1>

      <NewsList news={DUMMY_NEWS} />
    </div>
  );
};

export default NewsPage;
