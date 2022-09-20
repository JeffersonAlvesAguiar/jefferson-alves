import NavBar from "../Components/NavBar/";
import Portfolio from "../Components/Portfolio/";
import Career from "../Components/Career/";
import Skills from "../Components/Skills/";
import Footer from "../Components/Footer/";
import { Teste } from "./style";

function Layout() {
  return (
    <>
      <Teste>
        <NavBar />
      </Teste>
      <Career />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Layout;
