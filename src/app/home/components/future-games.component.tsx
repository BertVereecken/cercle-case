"use client";

import React from "react";
import { FutureGameInfo } from "@/app/home/components/game-info.component";
import { useFutureGames } from "@/app/home/hooks/future-game-info.hook";

export const FutureGames = (): React.ReactElement => {
  const futureGamesQuery = useFutureGames();

  return (
    <>
      {(futureGamesQuery.data ?? []).map((futureGame) => (
        <div className={"pb-2"} key={futureGame.id}>
          <FutureGameInfo futureGameInfo={futureGame} />
        </div>
      ))}
    </>
  );
};
