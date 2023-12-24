import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { Menu, Sun } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type props = { children: React.JSX.Element | ReactNode };

export default function Navbar({ children }: props) {
  return (
    <div>
      <nav className="bg-slate-200 p-3">
        <div className="flex justify-between items-center h-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <div className="w-fit text-2xl font-bold">BAD TIME</div>
          <Button size="icon" variant="ghost">
            <Sun />
          </Button>
        </div>
      </nav>

      <div>{children}</div>
    </div>
  );
}
