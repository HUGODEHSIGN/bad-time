import {
  DocumentData,
  DocumentReference,
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useEffect } from "react";
import { useGetCurrentUser } from "./useGetCurrentUser";

export function useSendInvite() {
  const { uid, username } = useGetCurrentUser();

  async function sendInvite(recipientUid: string) {
    await addDoc(collection(db, "invites"), {
      senderUid: uid,
      senderUsername: username,
      recipientUid,
      // lobbyId: add later
    });
  }
  return { sendInvite };
}
