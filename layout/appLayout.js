// ========== Component  ========== \\
import Navigation from "../components/navigation";

// ========== Layout ========== \\
import ModalLayout from "./modalLayout";

const AppLayout = ({ children, header }) => {
  return (
    <>
      {header && (
        <ModalLayout
          className="clg:w-0 overflow-hidden duration-700 absolute top-0 left-0"
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
