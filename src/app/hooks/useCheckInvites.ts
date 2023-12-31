// import { collection, getDocs, query, where } from "firebase/firestore";
// import { useGetCurrentUser } from "./useGetCurrentUser";
// import { db } from "../../../firebase-config";
// import { useEffect, useState } from "react";

// export function useCheckInvites() {
//   const [isDisabled, setIsDisabled] = useState(false);
//   const { uid } = useGetCurrentUser();
//   const [sentInvites, setSentInvites] = useState<string[]>([]);

//   useEffect(() => {
//     async function getInviteData() {
//       const q = query(
//         collection(db, "invites"),
//         where("senderUid", "==", `${uid}`),
//       );
//       const querySnapshot = await getDocs(q);

//       const invites = querySnapshot.docs.map((doc) => doc.data().recipientUid);
//       setSentInvites(invites);
//     }
//     getInviteData();
//   }, [uid]);

//   function checkInvite(playerListUid: string) {
//     return sentInvites.includes(playerListUid);
//   }

//   useEffect(() => {
//     setIsDisabled(checkInvite(uid));
//   }, [uid, sentInvites]);

//   return { checkInvite, isDisabled };
// }

import { collection, getDocs, query, where } from "firebase/firestore";
import { useGetCurrentUser } from "./useGetCurrentUser";
import { db } from "../../../firebase-config";
import { useEffect, useState } from "react";

export function useCheckInvites() {
  const { uid } = useGetCurrentUser();
  const [sentInvites, setSentInvites] = useState<string[]>([]);

  useEffect(() => {
    async function getInviteData() {
      try {
        const q = query(
          collection(db, "invites"),
          where("senderUid", "==", `${uid}`),
        );
        const querySnapshot = await getDocs(q);

        const invites = querySnapshot.docs.map(
          (doc) => doc.data().recipientUid,
        );
        setSentInvites(invites);
      } catch (error) {
        console.error("Error fetching invites:", error);
      }
    }

    getInviteData();
  }, [uid]);

  function checkInvite(playerListUid: string) {
    return sentInvites.includes(playerListUid);
  }

  return { checkInvite, sentInvites };
}
