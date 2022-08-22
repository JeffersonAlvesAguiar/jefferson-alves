import NavBar from "../Components/NavBar/";
import Portfolio from "../Components/Portfolio/";
import Career from "../Components/Career/";
import Skills from "../Components/Skills/";
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
    </>
  );
}

export default Layout;
