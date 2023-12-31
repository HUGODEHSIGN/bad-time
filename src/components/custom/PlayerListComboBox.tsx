"use client";

import React, { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useSendInvite } from "../../app/hooks/useSendInvite";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGetPlayers } from "@/app/hooks/useGetPlayers";
import { addDoc, collection } from "firebase/firestore";
import { useCheckInvites } from "@/app/hooks/useCheckInvites";
import PlayerListComboItem from "./PlayerListComboItem";
import { PlayCircleIcon } from "lucide-react";

export default function PlayerListComboBox() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { players } = useGetPlayers();

  const { sendInvite } = useSendInvite();

  const { checkInvite } = useCheckInvites();

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            + Add Player
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <PlayerList setOpen={setOpen} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          + Add Player
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <PlayerList setOpen={setOpen} />
        </div>
      </DrawerContent>
    </Drawer>
  );

  function PlayerList({ setOpen }: { setOpen: (open: boolean) => void }) {
    return (
      <Command>
        <CommandInput placeholder="Filter status..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {players.map((player) => (
              <PlayerListComboItem
                playerName={player.username}
                playerUid={player.uid}
                key={player.uid}
              ></PlayerListComboItem>
              //   <CommandItem
              //     key={player.uid}
              //     value={player.username}
              //     disabled={checkInvite(player.uid)}
              //     onSelect={(value) => {
              //       console.log(checkInvite(player.uid));
              //       //   sendInvite(player.uid);
              //     }}
              //   >
              //     {player.username}
              //   </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    );
  }
}
