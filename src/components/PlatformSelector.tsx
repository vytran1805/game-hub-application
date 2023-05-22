import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatforms";

const PlatformSelector = () => {
  // usePlatform() to get data dynamically and handle error
  const { data, error } = usePlatform();
  // if error occurs, return null
  if (error) return null;
  return (
    <Menu>
      {/* rendert as a regular Button */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
