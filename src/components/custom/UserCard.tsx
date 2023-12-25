"use client";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../firebase-config";
import React, { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { doc, getDoc } from "firebase/firestore";
import { useGetCurrentUser } from "@/app/hooks/useGetCurrentUser";

export default function UserCard() {
  // const [uid, setUid] = useState("");
  // const [username, setUsername] = useState("");

  // const docRef = doc(db, "users", `${auth.currentUser?.uid}`);

  // useEffect(() => {
  //   async function getUsername() {
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       setUsername(docSnap.data().username);
  //     } else {
  //       setUsername("can't find username");
  //     }
  //   }
  //   getUsername();
  // }, [uid]);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setUid(user.uid);
  //   } else {
  //     setUid("user is signed out");
  //   }
  // });

  const { uid, username } = useGetCurrentUser();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{username}</CardTitle>
          <CardDescription>{uid}</CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
