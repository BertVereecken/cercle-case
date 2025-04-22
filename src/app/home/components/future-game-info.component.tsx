import React from "react";
import { Description, SubTitle } from "@/components/typography";
import { format } from "date-fns";
import { TicketCheck } from "lucide-react";
import Image from "next/image";
import { FutureGameInfoItem } from "@/app/home/hooks/future-game-info.hook";

interface FutureGameInfoProps {
  futureGameInfo: FutureGameInfoItem;
}

export const FutureGameInfo = ({
  futureGameInfo,
}: FutureGameInfoProps): React.ReactElement => {
  return (
    <div className={"bg-neutral-700 p-3"}>
      <div className={"flex justify-between items-center"}>
        <div className={"flex gap-4"}>
          <Image src={"/krc-genk.png"} alt={"genk"} width={30} height={30} />
          <div className={"flex flex-col"}>
            <SubTitle className={"italic"}>{futureGameInfo.gameName}</SubTitle>
            <Description className={"font-semibold"}>
              {format(futureGameInfo.gameDate, "eeee dd MMMM, HH:mm")}
            </Description>
          </div>
        </div>

        {!futureGameInfo.isFullyBooked && (
          <div className={"bg-green-500 p-2"}>
            <TicketCheck />
          </div>
        )}
      </div>
    </div>
  );
};
