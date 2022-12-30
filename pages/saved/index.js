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
      <div className="w-full gap-2 p-10 h-full">
        <div className="clg:block w-8 hidden navOpener cursor-pointer">
          <div className="w-full h-0.5 bg-black m-2"></div>
          <div className="w-full h-0.5 bg-black m-2"></div>
          <div className="w-full h-0.5 bg-black m-2"></div>
        </div>
        <div className="overflow-auto h-full flex flex-wrap">
          {favorites.map((el, index) => {
            return (
              <SavedCard
                key={index}
                data={el}
                removeFavorite={removeFavorite}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Saved;
