import { Container, Box } from "./style";

function Footer() {
  const UrlLinkedin = "https://www.linkedin.com/in/jefferson-alves-22a76a208/";
  const UrlGitHub = "https://github.com/JeffersonAlvesAguiar";

  return (
    <>
      <Container>
        <Box>
          <h1>Jefferson Alves 2022</h1>
        </Box>
        <Box>
          <li>
            <a href={UrlLinkedin} target="_blank">
              Linkedin: Jefferson Alves
            </a>
            <a href={UrlGitHub} target="_blank">
              Git Hub: Jefferson Alves
            </a>
          </li>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
