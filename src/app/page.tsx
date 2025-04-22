import { HeaderTitle } from "@/components/typography";
import { AllInfoButton } from "@/components/all-info-button";
import { PwaInstallPrompt } from "@/components/install-prompt";
import { FutureGames } from "@/app/home/components/future-games.component";
import { RecentNews } from "@/app/home/components/recent-news.component";
import Image from "next/image";

export default function Home() {
  return (
    <div className={"border border-green-500 h-full"}>
      <PwaInstallPrompt />

      <div className="relative h-[200px]">
        <Image
          src="/stadium.png"
          alt="Stadium"
          width={375}
          height={200}
          className="object-cover w-full h-full brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
          <h1 className="text-2xl font-bold uppercase leading-tight text-white italic w-3/4">
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

      <div className={"bg-black p-4"}>
        <div className={"flex justify-between items-center pb-4"}>
          <HeaderTitle>Wedstrijden</HeaderTitle>
          <AllInfoButton />
        </div>

        <FutureGames />

        <div className={"flex justify-between items-center pb-4"}>
          <HeaderTitle>Nieuws</HeaderTitle>
          <AllInfoButton />
        </div>

        <RecentNews />
      </div>
    </div>
  );
}
