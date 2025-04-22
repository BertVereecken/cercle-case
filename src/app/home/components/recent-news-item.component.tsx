import React from "react";
import { Description, SubTitle } from "@/components/typography";
import { format } from "date-fns";
import Image from "next/image";
import { RecentNewsArticle } from "@/app/home/hooks/recent-news.hook";

interface RecentNewsItemProps {
  recentNewsArticle: RecentNewsArticle;
}

export const RecentNewsItem = ({
  recentNewsArticle,
}: RecentNewsItemProps): React.ReactElement => {
  return (
    <div className={"bg-zinc-500 p-3"}>
      <div className={"flex justify-between items-center"}>
        <div className={"flex gap-4"}>
          <Image
            src={"/voetballer1.png"}
            alt={"voetballer"}
            width={30}
            height={30}
          />
          <div className={"flex flex-col"}>
            <SubTitle underline={false}>{recentNewsArticle.title}</SubTitle>
            <Description>
              {format(recentNewsArticle.publishedDate, "eeee dd MMMM, HH:mm")}
            </Description>
          </div>
        </div>
      </div>
    </div>
  );
};
