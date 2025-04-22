import React from "react";
import { Description, SubTitle } from "@/components/typography";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { RecentNewsArticle } from "@/app/home/hooks/recent-news.hook";

interface RecentNewsItemProps {
  recentNewsArticle: RecentNewsArticle;
}

export const RecentNewsItem = ({
  recentNewsArticle,
}: RecentNewsItemProps): React.ReactElement => {
  return (
    <div className={"bg-neutral-700 h-[120px]"}>
      <div className={"flex gap-4 h-full"}>
        <div className={"flex w-1/3 min-w-1/3"}>
          <Image
            src={"/voetballer1.png"}
            alt={"voetballer"}
            width={30}
            height={30}
            className="object-cover h-full w-full"
          />
        </div>

        <div className={"flex flex-col justify-center gap-1"}>
          <SubTitle>{recentNewsArticle.title}</SubTitle>
          <Description className={"text-white font-semibold"}>
            {formatDistanceToNow(recentNewsArticle.publishedDate, {
              addSuffix: true,
            })}
          </Description>
        </div>
      </div>
    </div>
  );
};
