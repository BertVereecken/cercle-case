"use client";

import React from "react";
import { useFutureGames } from "@/hooks/future-game-info.hook";
import { FutureGameInfo } from "@/components/game-info.component";

export const FutureGames = (): React.ReactElement => {
  const futureGamesQuery = useFutureGames();

  return (
    <>
      {(futureGamesQuery.data ?? []).map((futureGame) => (
        <div className={"pb-2"}>
          <FutureGameInfo
            gameDate={futureGame.gameDate}
            gameName={futureGame.gameName}
            isFullyBooked={futureGame.isFullyBooked}
          />
        </div>
      ))}
    </>
  );
};
