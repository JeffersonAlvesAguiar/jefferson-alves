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

  return (
    <>
      <Box onClick={handleOpen}>
        {openMenu !== true ? (
          <HiOutlinePlus className="iconMenu">
            <h1>teste</h1>
          </HiOutlinePlus>
        ) : (
          <AiOutlineClose className="iconMenu" />
        )}
      </Box>
    </>
  );
}

export default MenuMobile;
