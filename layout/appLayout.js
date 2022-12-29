// ========== Component  ========== \\
import Navigation from "../components/navigation";

// ========== Layout ========== \\
import ModalLayout from "./modalLayout";

const AppLayout = ({ children, header }) => {
  return (
    <>
      {header && (
        <ModalLayout
          className="w-1/4 clg:w-0 overflow-hidden duration-700"
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
