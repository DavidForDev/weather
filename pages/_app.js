// ========= Layout ========== \\
import AppLayout from "../layout/appLayout";

// ========= Context ========== \\
import { FavoriteProvider } from "../context/addtoFavorite.context";

import "../public/styles/global.css";

const App = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <AppLayout header={true}>
      <FavoriteProvider>
        <Component {...pageProps} />
      </FavoriteProvider>
    </AppLayout>
  );
};

export default App;
