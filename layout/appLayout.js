// ========== Component  ========== \\
import Navigation from "../components/navigation";

// ========== Layout ========== \\
import ModalLayout from "./modalLayout";

const AppLayout = ({ children, header }) => {
  return (
    <>
      {header && (
        <ModalLayout
          modalName="navModal"
          opener="navOpener"
          body="main"
          style="lg:w-0 w-1/4 overflow-hidden duration-700"
        >
          <Navigation />
        </ModalLayout>
      )}
      <main className="main duration-700">{children}</main>
    </>
  );
};

export default AppLayout;
