import { zz } from "@/constants/zz";
import { z } from "zod";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import recentNewsJson from "../../../recent-news.json";
import { queryKeys } from "@/constants/querykeys";

const recentNewsArticleDtoSchema = z.object({
  id: z.number(),
  title: zz.nonEmptyString,
  publishedDate: zz.isoDateTimeSchema,
});

const recentNewsArticleSchema = z.object({
  id: z.number(),
  title: zz.nonEmptyString,
  publishedDate: z.date(),
});

export type RecentNewsArticle = z.infer<typeof recentNewsArticleSchema>;

const fetchRecentNewsArticles = (): Array<RecentNewsArticle> => {
  console.log("json", recentNewsJson);
  const dto = recentNewsArticleDtoSchema.array().parse(recentNewsJson);

  console.log("dto", dto);
  return dto.map((article) => ({
    ...article,
    publishedDate: new Date(article.publishedDate),
  }));
};

export const useRecentNewsArticles = (): UseQueryResult<
  Array<RecentNewsArticle>,
  unknown
> => {
  return useQuery({
    queryKey: [queryKeys.RECENT_NEWS],
    queryFn: fetchRecentNewsArticles,
  });
};
