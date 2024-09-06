import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack
      padding="20px"
      position={"sticky"}
      top={"0"}
      _light={{ bg: "#ffffffbd" }}
      zIndex={"10"}
      _dark={{ bg: "#111" }}
    >
      <Link to={"/"}>
        <Image src={logo} width={'60px'} height={'60px'} alt="logo" rounded={"40%"}/>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
