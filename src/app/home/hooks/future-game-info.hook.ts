import { zz } from "@/constants/zz";
import { z } from "zod";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import futureGamesJson from "../../../future-games-info.json";
import { queryKeys } from "@/constants/querykeys";

const futureGameInfoItemDtoSchema = z.object({
  id: z.number(),
  gameName: zz.nonEmptyString,
  gameDate: zz.isoDateTimeSchema,
  isFullyBooked: z.boolean(),
});

const futureGameInfoItemSchema = z.object({
  id: z.number(),
  gameName: zz.nonEmptyString,
  gameDate: z.date(),
  isFullyBooked: z.boolean(),
});

export type FutureGameInfoItem = z.infer<typeof futureGameInfoItemSchema>;

const fetchFutureGamesInfoItems = (): Array<FutureGameInfoItem> => {
  const dto = futureGameInfoItemDtoSchema.array().parse(futureGamesJson);

  return dto.map((game) => ({
    ...game,
    gameDate: new Date(game.gameDate),
  }));
};

export const useFutureGames = (): UseQueryResult<
  Array<FutureGameInfoItem>,
  unknown
> => {
  return useQuery({
    queryKey: [queryKeys.FUTURE_GAMES],
    queryFn: fetchFutureGamesInfoItems,
  });
};
