import { Box } from "./style";
import { HiOutlinePlus } from "react-icons/hi";

function MenuMobile() {
  const Menu = () => {
    console.log("Menu Mobile");
  };

  return (
    <>
      <Box>
        <HiOutlinePlus className="iconMenu" onClick={Menu} />
      </Box>
    </>
  );
}

export default MenuMobile;
