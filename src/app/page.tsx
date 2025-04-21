import { PwaInstallPrompt } from "@/app/install-prompt";
import { ArrowRight } from "lucide-react";
import { HeaderTitle, SubTitle } from "@/components/typography";
import { FutureGameInfo } from "@/components/game-info.component";
import { useFutureGames } from "@/hooks/future-game-info.hook";

function AllInfoButton() {
  return (
    <div className={"flex gap-2"}>
      <SubTitle>Alle</SubTitle>
      <ArrowRight className={"text-green-500"} />
    </div>
  );
}

export default function Home() {
  const futureGamesQuery = useFutureGames();

  console.log("futureGamesQuery", futureGamesQuery.data);
  return (
    <div className={"border border-green-500"}>
      <PwaInstallPrompt />

      <div className="relative h-[200px]">
        {/*<Image*/}
        {/*  src="/placeholder.svg?height=200&width=375"*/}
        {/*  alt="Stadium"*/}
        {/*  width={375}*/}
        {/*  height={200}*/}
        {/*  className="object-cover w-full h-full brightness-75"*/}
        {/*/>*/}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
          <h1 className="text-2xl font-bold uppercase leading-tight">
            Alle foto&apos;s na de puntendeling tegen Eupen
          </h1>

          {/* Progress indicator */}
          <div className="flex gap-2 mt-4 mb-2">
            <div className="h-1.5 bg-green-500 w-1/3 rounded-full"></div>
            <div className="h-1.5 bg-gray-600 w-1/3 rounded-full"></div>
            <div className="h-1.5 bg-gray-600 w-1/3 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className={"bg-black p-4 gap-4"}>
        <div className={"flex justify-between items-center pb-4"}>
          <HeaderTitle>Wedstrijden</HeaderTitle>
          <AllInfoButton />
        </div>

        <div className={"pb-2"}>
          <FutureGameInfo
            gameDate={new Date("2025-05-05T18:00:00.000")}
            gameName={"KRC Genk"}
            isFullyBooked={false}
          />
        </div>

        <div className={"pb-2"}>
          <FutureGameInfo
            gameDate={new Date("2025-05-07T16:00:00.000")}
            gameName={"KV Kortrijk"}
            isFullyBooked={false}
          />
        </div>
      </div>
    </div>
  );
}
