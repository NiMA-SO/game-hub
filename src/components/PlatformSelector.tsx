import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import usePlatforms from "../hooks/usePlatforms";
import Platform from "../entities/Platform";
import { TiTick } from "react-icons/ti";
import useGameQueryStore from "../store";



const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const selectedPlatform = useGameQueryStore(s => s.gameQuery)
  const setPlatform = useGameQueryStore(s => s.setPlatform)

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaAngleDown />}>
        {selectedPlatform.platform ? selectedPlatform.platform?.name : 'Platforms'}
      </MenuButton>
      <MenuList>
        {selectedPlatform.platform && (
          <MenuItem onClick={() => setPlatform(null)}>Platforms</MenuItem>
        )}
        {data?.results.map((platform : Platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatform(platform)}
          >
            {selectedPlatform === platform && <TiTick />}
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
