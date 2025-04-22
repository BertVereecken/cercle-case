"use client";

import React from "react";
import { useRecentNewsArticles } from "@/app/home/hooks/recent-news.hook";
import { RecentNewsItem } from "@/app/home/components/recent-news-item.component";

export const RecentNews = (): React.ReactElement => {
  const recentNewsArticlesQuery = useRecentNewsArticles();

  return (
    <>
      {(recentNewsArticlesQuery.data ?? []).map((article) => (
        <div className={"pb-2"} key={article.id}>
          <RecentNewsItem recentNewsArticle={article} />
        </div>
      ))}
    </>
  );
};
