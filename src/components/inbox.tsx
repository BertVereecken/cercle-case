import { Inbox } from "@novu/nextjs";
import { z } from "zod";

const { NEXT_PUBLIC_NOVU_APP_IDENTIFIER, NEXT_PUBLIC_NOVU_SUBSCRIBER_ID } = z
  .object({
    NEXT_PUBLIC_NOVU_APP_IDENTIFIER: z.string().min(1),
    NEXT_PUBLIC_NOVU_SUBSCRIBER_ID: z.string().min(1),
  })
  .parse(process.env);

export const NovuInboxCenter = () => (
  <nav className="flex justify-end items-center p-4 gap-4 h-16">
    <Inbox
      applicationIdentifier={NEXT_PUBLIC_NOVU_APP_IDENTIFIER}
      subscriberId={NEXT_PUBLIC_NOVU_SUBSCRIBER_ID}
    />
  </nav>
);
