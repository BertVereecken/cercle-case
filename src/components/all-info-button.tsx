import { SubTitle } from "@/components/typography";
import { ArrowRight } from "lucide-react";

export function AllInfoButton() {
  return (
    <div className={"flex gap-2"}>
      <SubTitle className={"underline italic uppercase"}>Alle</SubTitle>
      <ArrowRight className={"text-lime-500"} />
    </div>
  );
}
