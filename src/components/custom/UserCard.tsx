"use client";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../firebase-config";
import React, { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { doc, getDoc } from "firebase/firestore";

export default function UserCard() {
  const [uid, setUid] = useState("");
  const [username, setUsername] = useState("");

  const docRef = doc(db, "users", `${auth.currentUser?.uid}`);

  async function getUsername() {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUsername(docSnap.data().username);
    } else {
      setUsername("can't find username");
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
      getUsername();
    } else {
      setUid("user is signed out");
    }
  });
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
