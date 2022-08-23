import Slide from "./Slide/";
import { BoxContainer, Box } from "./style";

function Portfolio() {
  return (
    <>
      <BoxContainer>
        <Box>
          <h1>Alguns dos meus projetos</h1>
        </Box>

        <Box>
          <Slide />
        </Box>
      </BoxContainer>
    </>
  );
}

export default Portfolio;
