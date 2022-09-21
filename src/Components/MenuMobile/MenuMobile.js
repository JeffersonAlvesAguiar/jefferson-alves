import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Box } from "./style";

function MenuMobile() {
  const [openMenu, setOpenmenu] = useState(false);

  const handleOpen = () => {
    setOpenmenu(!openMenu);
    console.log(openMenu);
  };

  const UrlLinkedin = "https://www.linkedin.com/in/jefferson-alves-22a76a208/";
  const UrlGitHub = "https://github.com/JeffersonAlvesAguiar";

  return (
    <>
      <Box onClick={handleOpen}>
        {openMenu !== true ? (
          <HiOutlinePlus className="iconMenu" />
        ) : (
          <nav>
            <a href={UrlLinkedin} target="_blank">
              Linkedin
            </a>
            <a href={UrlGitHub} target="_blank">
              Git Hub
            </a>
            <AiOutlineClose className="iconMenu" />
          </nav>
        )}
      </Box>
    </>
  );
}

export default MenuMobile;
