import { playerType } from "@/app/hooks/useGetPlayers";
import React, { useEffect, useState } from "react";
import { CommandItem } from "../ui/command";
import { useCheckInvites } from "@/app/hooks/useCheckInvites";
import { useSendInvite } from "@/app/hooks/useSendInvite";
import { Button } from "../ui/button";

type PlayerListComboItemProps = {
  playerName: string;
  playerUid: string;
};

export default function PlayerListComboItem({
  playerName,
  playerUid,
}: PlayerListComboItemProps) {
  const { checkInvite, sentInvites } = useCheckInvites();
  const [isDisabled, setIsDisabled] = useState(false);
  const { sendInvite } = useSendInvite();

  useEffect(() => {
    setIsDisabled(checkInvite(playerUid));
  }, [sentInvites]);

  function handleClick() {
    sendInvite(playerUid);
    setIsDisabled(true);
  }

  return (
    <>
      <CommandItem
        value={playerName}
        disabled={isDisabled}
        onSelect={handleClick}
      >
        <div className="flex justify-between w-full">
          <div>{playerName}</div>
          <div className="text-neutral-400">{isDisabled && "Sent"}</div>
        </div>
      </CommandItem>
    </>
  );
}
