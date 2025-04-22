"use client";

import React from "react";
import { useFutureGames } from "@/app/home/hooks/future-game-info.hook";
import { usePastGames } from "@/app/home/hooks/past-games.hook";
import { FutureGameInfo } from "./future-game-info.component";
import { PastGameInfo } from "@/app/home/components/past-game-info.component";

export const RecentAndUpcomingGames = (): React.ReactElement => {
  const futureGamesQuery = useFutureGames();
  const pastGamesQuery = usePastGames();

  return (
    <>
      {(pastGamesQuery.data ?? []).map((pastGame) => (
        <div className={"pb-2"} key={pastGame.id}>
          <PastGameInfo pastGameInfo={pastGame} />
        </div>
      ))}

      {(futureGamesQuery.data ?? []).map((futureGame) => (
        <div className={"pb-2"} key={futureGame.id}>
          <FutureGameInfo futureGameInfo={futureGame} />
        </div>
      ))}
    </>
  );
};
