"use client";

import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";

export default function LogoutCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Logout</CardTitle>
        <CardDescription>Click the button below to logout</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          variant="destructive"
          onClick={() => {
            signOut(auth);
          }}>
          Log Out
        </Button>
      </CardFooter>
    </Card>
  );
}
