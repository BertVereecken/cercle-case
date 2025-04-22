import React from "react";
import { Description, SubTitle } from "@/components/typography";
import Image from "next/image";
import { PastGameInfoItem } from "@/app/home/hooks/past-games.hook";

interface PastGameInfoProps {
  pastGameInfo: PastGameInfoItem;
}

export const PastGameInfo = ({
  pastGameInfo,
}: PastGameInfoProps): React.ReactElement => {
  return (
    <div className={"bg-neutral-700 p-3"}>
      <div className={"flex justify-between items-center"}>
        <div className={"flex gap-4"}>
          <Image src={"/kas-eupen.png"} alt={"genk"} width={30} height={30} />
          <div className={"flex flex-col"}>
            <SubTitle className={"italic"}>{pastGameInfo.gameName}</SubTitle>
            <Description className={"underline font-semibold"}>
              Verslag en foto's
            </Description>
          </div>
        </div>
        <GameScore
          winningScore={pastGameInfo.winningScore}
          losingScore={pastGameInfo.losingScore}
        />
      </div>
    </div>
  );
};

// TODO: move to separate file later
interface GameScoreProps {
  winningScore: number;
  losingScore: number;
}

const GameScore = ({
  winningScore,
  losingScore,
}: GameScoreProps): React.ReactElement => {
  return (
    <div className={"flex gap-1 text-3xl font-bold text-white"}>
      <p className={"italic"}>{winningScore}</p>
      <span>-</span>
      <p className={"italic text-green-500"}>{losingScore}</p>
    </div>
  );
};
