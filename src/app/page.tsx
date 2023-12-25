import AuthCard from "@/components/custom/AuthCard";
import LogoutCard from "@/components/custom/LogoutCard";
import UserCard from "@/components/custom/UserCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <AuthCard />
      <UserCard />
      <LogoutCard />
    </main>
  );
}
