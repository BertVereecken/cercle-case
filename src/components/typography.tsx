import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const SubTitle: FC<
  PropsWithChildren<{
    italic?: boolean;
    underline?: boolean;
    capitalized?: boolean;
  }>
> = ({ children, italic = true, underline, capitalized = true }) => (
  <p
    className={cn(
      `text-white font-semibold ${capitalized && "uppercase"} ${italic && "italic"} ${underline && "underline"}`,
    )}
  >
    {children}
  </p>
);

export const Description: FC<
  PropsWithChildren<{ italic?: boolean; underline?: boolean }>
> = ({ children, italic = true, underline }) => (
  <p
    className={`text-gray-400 text-xs ${italic && "italic"} ${underline && "underline"}`}
  >
    {children}
  </p>
);

export const HeaderTitle: FC<PropsWithChildren> = ({ children }) => (
  <h2 className={"text-white uppercase text-xl font-semibold italic"}>
    {children}
  </h2>
);
