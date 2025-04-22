import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type TypographyProps = {
  className?: string;
};

export const SubTitle: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
}) => <p className={cn(`text-white font-bold ${className}`)}>{children}</p>;

export const Description: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
}) => <p className={cn(`text-gray-400 text-xs ${className}`)}>{children}</p>;

export const HeaderTitle: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  className,
}) => (
  <h2 className={`text-white text-xl font-bold ${className}`}>{children}</h2>
);
