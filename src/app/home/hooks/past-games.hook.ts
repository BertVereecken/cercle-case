import { zz } from "@/constants/zz";
import { z } from "zod";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import pastGames from "../../../past-games.json";
import { queryKeys } from "@/constants/querykeys";

const pastGameInfoItemDtoSchema = z.object({
  id: z.number(),
  gameName: zz.nonEmptyString,
  winningScore: z.number(),
  losingScore: z.number(),
});

const pastGameInfoItemSchema = z.object({
  id: z.number(),
  gameName: zz.nonEmptyString,
  winningScore: z.number(),
  losingScore: z.number(),
});

export type PastGameInfoItem = z.infer<typeof pastGameInfoItemSchema>;

const fetchPastGamesInfoItems = (): Array<PastGameInfoItem> => {
  return pastGameInfoItemDtoSchema.array().parse(pastGames);
};

export const usePastGames = (): UseQueryResult<
  Array<PastGameInfoItem>,
  unknown
> => {
  return useQuery({
    queryKey: [queryKeys.PAST_GAMES],
    queryFn: fetchPastGamesInfoItems,
  });
};
