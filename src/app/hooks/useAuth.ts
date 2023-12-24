import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase-config";
import { signInAnonymously } from "firebase/auth";

export function useAuth(username: string) {
  signInAnonymously(auth)
    .then(() => {
      console.log("signed in");
    })
    .then(() => {
      const currentUid = auth.currentUser?.uid;
      setDoc(doc(db, "users", `${currentUid}`), {
        currentCourt: "",
        invite: "",
        username,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
