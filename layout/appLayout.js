// ========== Component  ========== \\
import Navigation from "../components/navigation";

// ========== Layout ========== \\
import ModalLayout from "./modalLayout";

const AppLayout = ({ children, header }) => {
  return (
    <>
      {header && (
        <ModalLayout
          className="clg:w-0 clg:absolute clg:top-0 clg:left-0 overflow-hidden duration-700 w-1/4"
          modalName="navModal"
          opener="navOpener"
          body="main"
        >
          <Navigation />
        </ModalLayout>
      )}
      <main className="main duration-700">{children}</main>
    </>
  );
};

export default AppLayout;
