import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useEffect, useState } from "react";

export type playerType = {
  uid: string;
  username: string;
};

export function useGetPlayers() {
  const [players, setPlayers] = useState<Array<playerType>>([]);

  useEffect(() => {
    const playerList: playerType[] = [];
    async function getPlayers() {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        playerList.push({ uid: doc.id, username: doc.data().username });
      });
      setPlayers(playerList);
    }
    getPlayers();
  }, []);

  return { players };
}
