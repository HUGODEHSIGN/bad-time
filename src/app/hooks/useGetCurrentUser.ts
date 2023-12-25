import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";

export function useGetCurrentUser() {
  const [uid, setUid] = useState("");
  const [username, setUsername] = useState("");

  const docRef = doc(db, "users", `${auth.currentUser?.uid}`);

  useEffect(() => {
    async function getUsername() {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUsername(docSnap.data().username);
      } else {
        setUsername("can't find username");
      }
    }
    getUsername();
  }, [uid]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
    } else {
      setUid("user is signed out");
    }
  });
  return { uid, username };
}
