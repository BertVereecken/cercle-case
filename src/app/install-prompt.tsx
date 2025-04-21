"use client";

import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export const PwaInstallPrompt = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream,
    );

    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) {
    console.info("This app is already installed. Not prompting again.");
    return null;
  }

  return (
    <Drawer defaultOpen>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Install Cercle case as an app?</DrawerTitle>
          <DrawerDescription>
            Adding this app to your home screen allows you to keep up to date
            with the latest news
            {isIOS && (
              <p>
                To install this app on your iOS device, tap the share button
                <span role="img" aria-label="share icon">
                  {" "}
                  ⎋{" "}
                </span>
                and then "Add to Home Screen"
                <span role="img" aria-label="plus icon">
                  {" "}
                  ➕{" "}
                </span>
                .
              </p>
            )}
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
