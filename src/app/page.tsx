import AuthCard from "@/components/custom/AuthCard";
import InvitationCard from "@/components/custom/InvitationCard";
import LogoutCard from "@/components/custom/LogoutCard";
import PlayerListCard from "@/components/custom/PlayerListCard";
import UserCard from "@/components/custom/UserCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <AuthCard />
      <UserCard />
      <PlayerListCard />
      <InvitationCard />
      <LogoutCard />
    </main>
  );
}
