import { PwaInstallPrompt } from "@/app/install-prompt";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <PwaInstallPrompt />
      <Button>Test</Button>
    </>
  );
}
