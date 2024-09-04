import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/profile.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";


const NavBar = () => {
  
  return (
    <HStack padding="20px">
      <Image src={logo} boxSize={"50px"} alt="logo" rounded={"20px"}></Image>
      <SearchInput  />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
