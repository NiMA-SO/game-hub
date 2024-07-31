import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props{
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch} : Props) => {
  return (
    <HStack  padding="20px">
      <Image src={logo} boxSize={"50px"} alt="logo" rounded={"20px"}></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
