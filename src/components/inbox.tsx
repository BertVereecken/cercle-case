import { Inbox } from "@novu/nextjs";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const { NEXT_PUBLIC_NOVU_APP_IDENTIFIER, NEXT_PUBLIC_NOVU_SUBSCRIBER_ID } = z
  .object({
    NEXT_PUBLIC_NOVU_APP_IDENTIFIER: z.string().min(1),
    NEXT_PUBLIC_NOVU_SUBSCRIBER_ID: z.string().min(1),
  })
  .parse(process.env);

export const NovuInboxCenter = () => (
  <nav className="flex justify-end items-center p-4 gap-4 h-16 bg-black">
    <Button variant={"outline"} size={"icon"}>
      <Inbox
        applicationIdentifier={NEXT_PUBLIC_NOVU_APP_IDENTIFIER}
        subscriberId={NEXT_PUBLIC_NOVU_SUBSCRIBER_ID}
      />
    </Button>
  </nav>
);
