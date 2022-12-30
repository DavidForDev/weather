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
      <div className="w-full gap-7 p-10 h-full overflow-hidden flex flex-col">
        <div className="clg:block w-8 hidden navOpener cursor-pointer">
          <div className="w-full h-0.5 bg-black m-2"></div>
          <div className="w-full h-0.5 bg-black m-2"></div>
          <div className="w-full h-0.5 bg-black m-2"></div>
        </div>
        <div className="overflow-auto gap-9 flex flex-wrap justify-center w-full">
          {favorites.length === 0 ? (
            <h3 className="text-gray-400 text-xl">You have no favorite</h3>
          ) : (
            ""
          )}
          {favorites.map((el, index) => {
            return (
              <>
                <SavedCard
                  key={index}
                  data={el}
                  removeFavorite={removeFavorite}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Saved;
