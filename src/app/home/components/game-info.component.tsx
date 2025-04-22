import React from "react";
import { Description, SubTitle } from "@/components/typography";
import { format } from "date-fns";
import { TicketCheck } from "lucide-react";
import Image from "next/image";

interface FutureGameInfoProps {
  gameName: string;
  gameDate: Date;
  isFullyBooked: boolean;
}

export const FutureGameInfo = ({
  gameDate,
  gameName,
  isFullyBooked,
}: FutureGameInfoProps): React.ReactElement => {
  return (
    <div className={"bg-zinc-500 p-3"}>
      <div className={"flex justify-between items-center"}>
        <div className={"flex gap-4"}>
          <Image src={"/krc-genk.png"} alt={"genk"} width={30} height={30} />
          <div className={"flex flex-col"}>
            <SubTitle underline={false}>{gameName}</SubTitle>
            <Description>{format(gameDate, "eeee dd MMMM, HH:mm")}</Description>
          </div>
        </div>

        {!isFullyBooked && (
          <div className={"bg-green-500 p-2"}>
            <TicketCheck />
          </div>
        )}
      </div>
    </div>
  );
};

interface GameScoreProps {
  winningScore: number;
  losingScore: number;
}

const GameScore = ({
  winningScore,
  losingScore,
}: GameScoreProps): React.ReactElement => {
  return (
    <span>
      <p className={"underline italic text-white uppercase font-semibold"}>
        {winningScore}
      </p>

      <p className={"underline italic uppercase font-semibold text-green-500"}>
        {losingScore}
      </p>
    </span>
  );
};
