import { Box } from "./style";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function MenuMobile() {
  return (
    <>
      <Box>
        <FiMenu className="iconMenuOf" />
        <AiOutlineClose className="iconMenuOpen" />
      </Box>
    </>
  );
}

export default MenuMobile;
