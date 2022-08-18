import NavBar from "../Components/NavBar/";
import Portfolio from "../Components/Portfolio/Portfolio.js";
import Career from "../Components/Career/";
import Skills from "../Components/Skills/";
import {
  BoxContainer,
  Box,
  BoxNavBar,
  BoxCareer,
  BoxSkills,
  BoxPortfolio,
} from "./style";

function Layout() {
  return (
    <div>
      <BoxContainer>
        <BoxNavBar>
          <NavBar />
        </BoxNavBar>

        <Box>
          <BoxCareer>
            <Career />
          </BoxCareer>

          <BoxSkills>
            <Skills />
          </BoxSkills>

          <BoxPortfolio>
            <Portfolio />
          </BoxPortfolio>
        </Box>
      </BoxContainer>
    </div>
  );
}

export default Layout;
