import { BoxContainer, Box } from "./style";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

function Skills() {
  return (
    <>
      <BoxContainer>
        <Box>
          <span>
            <IoLogoHtml5 className="icon" />
            <p>Html</p>
          </span>
        </Box>

        <Box>
          <span>
            <IoLogoCss3 className="icon" />
            <p>CSS</p>
          </span>
        </Box>

        <Box>
          <span>
            <IoLogoJavascript className="icon" />
            <p>JavaScript</p>
          </span>
        </Box>

        <Box>
          <span>
            <FaReact className="icon" />
            <p>React</p>
          </span>
        </Box>

        <Box>
          <span>
            <SiStyledcomponents className="icon" />
            <p>Style-Components</p>
          </span>
        </Box>
      </BoxContainer>
    </>
  );
}

export default Skills;
