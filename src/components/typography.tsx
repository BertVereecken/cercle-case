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
      `text-white font-bold ${capitalized && "uppercase"} ${italic && "italic"} ${underline && "underline"}`,
    )}
  >
    {children}
  </p>
);

export const Description: FC<
  PropsWithChildren<{
    italic?: boolean;
    underline?: boolean;
    className?: string;
  }>
> = ({ children, italic = true, underline, className }) => (
  <p
    className={cn(
      `text-gray-400 text-xs ${italic && "italic"} ${underline && "underline"} ${className}`,
    )}
  >
    {children}
  </p>
);

export const HeaderTitle: FC<PropsWithChildren> = ({ children }) => (
  <h2 className={"text-white uppercase text-xl font-bold italic"}>
    {children}
  </h2>
);
