import { createContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

export const FavoriteContextP = createContext();

const FavoriteContext = ({ children }) => {
  const [favoritesList, setFavoriteList] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;
      try {
        const usersFavoritesRef = collection(
          db,
          "users",
          auth.currentUser.uid,
          "favorites"
        );
        const data = await getDocs(usersFavoritesRef);
        const favorites = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFavoriteList(favorites);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavorites();
  }, [user, favoritesList]);

  return (
    <FavoriteContextP.Provider value={{ favoritesList, setFavoriteList }}>
      {children}
    </FavoriteContextP.Provider>
  );
};

export default FavoriteContext;
