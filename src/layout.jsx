import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";
import Header from "./components/header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
