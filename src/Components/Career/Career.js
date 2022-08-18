import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import {
  BoxContainer,
  Box,
  Card,
  Icon,
  Title,
  ProgressBar,
  ProgressHtml,
  ProgressCss,
  ProgressStyleComponents,
  ProgressJavaScript,
  ProgressReactJs,
  Grid,
} from "./style";

function Career() {
  return (
    <div>
      <BoxContainer>
        <Box>
          <p>
            <h1>DEV FRONT END_</h1>
            <br />
            Olá, me chamo Jefferson Alves.
            <br />
            <br />
            Estou cursando Ciência da Computação 4º fase, apaixonado por
            tecnologia sempre em busca de novos desafios.
            <br />
            <br />
            Em 2022 trablhei no desenvolvimento de uma plataforma de curso como
            desenvolvedor front-end. No projeto utilizei técnicas de
            desenvolvimento para possibilitar a escalabilidade do produto. No
            dia a dia executei tarefas aplicando padrões de arquitetura SOLID e
            Clean Code.
            <br />
            <br />
            Na busca por conhecimento desenvolvi alguns projetos pessoais e
            academicos que tenho imenso orgulho e que deixarei disponivel com
            link para acesso na aba " Portfolio "; em " Git Hub " você
            emcontrara o codigo fonte. Caso esteja a procura de um dev front-end
            estarei a disposisão para responder e avaliar a possibilidade. Se
            estiver em busca de inspiração espero que meu portfolio tenha
            ajudado em sua jornada.
          </p>
        </Box>

        <Box>
          <Grid>
            <Card>
              <Icon>
                <IoLogoHtml5 className="icon" />
              </Icon>
              <Title>Html</Title>
              <ProgressBar>
                <span>
                  <ProgressHtml />
                </span>
              </ProgressBar>
            </Card>

            <Card>
              <Icon>
                <IoLogoCss3 className="icon" />
              </Icon>
              <Title>CSS</Title>
              <ProgressBar>
                <span>
                  <ProgressCss />
                </span>
              </ProgressBar>
            </Card>

            <Card>
              <Icon>
                <SiStyledcomponents className="icon" />
              </Icon>
              <Title>Style-Components</Title>
              <ProgressBar>
                <span>
                  <ProgressStyleComponents />
                </span>
              </ProgressBar>
            </Card>
          </Grid>

          <Grid>
            <Card>
              <Icon>
                <IoLogoJavascript className="icon" />
              </Icon>
              <Title>JavaScript</Title>
              <ProgressBar>
                <span>
                  <ProgressJavaScript />
                </span>
              </ProgressBar>
            </Card>

            <Card>
              <Icon>
                <FaReact className="icon" />
              </Icon>
              <Title>React JS</Title>
              <ProgressBar>
                <span>
                  <ProgressReactJs />
                </span>
              </ProgressBar>
            </Card>
          </Grid>
        </Box>
      </BoxContainer>
    </div>
  );
}

export default Career;
