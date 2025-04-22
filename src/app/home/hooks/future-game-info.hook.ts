import { zz } from "@/constants/zz";
import { z } from "zod";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import futureGamesJson from "../../../future-games-info.json";
import { queryKeys } from "@/constants/querykeys";

const futureGamesInfoDtoSchema = z.object({
  id: z.number(),
  gameName: zz.nonEmptyString,
  gameDate: zz.isoDateTimeSchema,
  isFullyBooked: z.boolean(),
});

const futureGamesInfoSchema = z.object({
  id: z.number(),
  gameName: zz.nonEmptyString,
  gameDate: z.date(),
  isFullyBooked: z.boolean(),
});

type FutureGamesInfo = z.infer<typeof futureGamesInfoSchema>;

const fetchFutureGamesInfo = (): Array<FutureGamesInfo> => {
  const dto = futureGamesInfoDtoSchema.array().parse(futureGamesJson);

  return dto.map((game) => ({
    ...game,
    gameDate: new Date(game.gameDate),
  }));
};

export const useFutureGames = (): UseQueryResult<
  Array<FutureGamesInfo>,
  unknown
> => {
  return useQuery({
    queryKey: [queryKeys.FUTURE_GAMES],
    queryFn: fetchFutureGamesInfo,
  });
};
