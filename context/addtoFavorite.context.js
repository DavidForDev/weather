import { createContext, useEffect, useState } from "react";

const initialState = {
  favorites: [],
  addFavorite: null,
  removeFavorite: null,
};

const FavoriteContext = createContext(initialState);

export const FavoriteProvider = ({ children }) => {
  // ========== add favorite array in localstorage if we don't have =========== \\
  useEffect(() => {
    if (localStorage.getItem("favorite")) return;

    localStorage.setItem("favorite", "[]");
  });

  // ========== Favorite from localstorage ========== \\
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem("favorite")));
  }, []);

  // ========== Add to localstorage =========== \\
  const addToFavorite = (cityName, countryCode) => {
    const exist = favorite.some((x) => x.cityName === cityName);

    if (!exist) {
      const newFavorite = [
        ...favorite,
        {
          cityName: cityName,
          countryCode: countryCode,
        },
      ];

      setFavorite(newFavorite);

      localStorage.setItem("favorite", JSON.stringify(newFavorite));
    } else {
      alert("such weather arleady in favorites");
    }
  };

  // ========== Remove from LocalStorage ========== \\
  const removeFavorite = async (cityName, countryCode) => {
    const favoritObject = { cityName: cityName, countryCode: countryCode };

    const newFavorite = favorite.filter(
      (x) => JSON.stringify(x) !== JSON.stringify(favoritObject)
    );

    setFavorite(newFavorite);

    localStorage.setItem("favorite", JSON.stringify(newFavorite));
  };

  // ========== Finally =========== \\
  const state = {
    favorites: favorite,
    addFavorite: addToFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={state}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
