"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useReceiveInvites } from "@/app/hooks/useReceiveInvites";

export default function InvitationCard() {
  const { inviteList } = useReceiveInvites();

  function renderInvites() {
    return inviteList.map((invite) => (
      <div key={invite.id}>{invite.senderUsername}</div>
    ));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invitations</CardTitle>
        <CardDescription>View your invitations here</CardDescription>
      </CardHeader>
      <CardContent>{renderInvites()}</CardContent>
      <CardFooter>
        <Button variant="destructive">Decline all</Button>
      </CardFooter>
    </Card>
  );
}
