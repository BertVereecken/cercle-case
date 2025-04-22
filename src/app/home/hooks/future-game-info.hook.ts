import { zz } from "@/constants/zz";
import { z } from "zod";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import futureGamesJson from "../../../future-games-info.json";
import { queryKeys } from "@/constants/querykeys";

const futureGameInfoDtoSchema = z.object({
  id: z.number(),
  gameName: zz.nonEmptyString,
  gameDate: zz.isoDateTimeSchema,
  isFullyBooked: z.boolean(),
});

const futureGameInfoSchema = z.object({
  id: z.number(),
  gameName: zz.nonEmptyString,
  gameDate: z.date(),
  isFullyBooked: z.boolean(),
});

type FutureGameInfo = z.infer<typeof futureGameInfoSchema>;

const fetchFutureGamesInfo = (): Array<FutureGameInfo> => {
  const dto = futureGameInfoDtoSchema.array().parse(futureGamesJson);

  return dto.map((game) => ({
    ...game,
    gameDate: new Date(game.gameDate),
  }));
};

export const useFutureGames = (): UseQueryResult<
  Array<FutureGameInfo>,
  unknown
> => {
  return useQuery({
    queryKey: [queryKeys.FUTURE_GAMES],
    queryFn: fetchFutureGamesInfo,
  });
};
