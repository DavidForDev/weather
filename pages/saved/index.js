import { useContext } from "react";

// ========= Layout ========= \\
import HeadLayout from "../../layout/headLayout";

// ========= Components ========= \\
import SavedCard from "../../components/savedCard/savedCard";
import FavoriteContext from "../../context/addtoFavorite.context";

const Saved = () => {
  const { removeFavorite, favorites } = useContext(FavoriteContext);

  return (
    <>
      <HeadLayout title="saved Location" />
      <div className="flex w-full gap-2 flex-wrap p-10 overflow-auto h-full">
        {favorites.map((el, index) => {
          return (
            <SavedCard key={index} data={el} removeFavorite={removeFavorite} />
          );
        })}
      </div>
    </>
  );
};

export default Saved;
