import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useGetCurrentUser } from "./useGetCurrentUser";
import { useState } from "react";

type inviteType = {
  id: string;
  senderUsername: string;
};

export function useReceiveInvites() {
  const [inviteList, setInviteList] = useState<Array<inviteType>>([]);
  const { uid, username } = useGetCurrentUser();

  const q = query(
    collection(db, "invites"),
    where("recipientUid", "==", `${uid}`),
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const invitations: inviteType[] = [];
    querySnapshot.forEach((doc) => {
      invitations.push({
        id: doc.id,
        senderUsername: doc.data().senderUsername,
      });
    });
    setInviteList(invitations);
  });
  return { inviteList };
}
