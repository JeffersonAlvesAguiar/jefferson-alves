import { Box } from "./style";
import { FiMenu } from "react-icons/fi";

const UrlLinkedin = "https://www.linkedin.com/in/jefferson-alves-22a76a208/";
const UrlGitHub = "https://github.com/JeffersonAlvesAguiar";

function NavBar() {
  return (
    <>
      <Box>
        <h1>Jefferson Alves</h1>
        <a>Sobre mim</a>
        <a href={UrlLinkedin} target="_blank">
          Linkedin
        </a>
        <a href={UrlGitHub} target="_blank">
          Git Hub
        </a>
        <a>Portfólio</a>
        <FiMenu className="iconMenu"/>
      </Box>
    </>
  );
}

export default NavBar;