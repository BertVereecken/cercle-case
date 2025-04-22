import { SubTitle } from "@/components/typography";
import { ArrowRight } from "lucide-react";

export function AllInfoButton() {
  return (
    <div className={"flex gap-2"}>
      <SubTitle underline>Alle</SubTitle>
      <ArrowRight className={"text-green-500"} />
    </div>
  );
}
