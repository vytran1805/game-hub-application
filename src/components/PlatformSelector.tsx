import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../gameQueryStore";
import usePlatformLookup from "../hooks/usePlatformLookup";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  // usePlatform() to get data dynamically and handle error
  const { data: platforms, error } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  
  // Find platform that its id equals given selectedPlatformId
  const selectedPlatformObj = usePlatformLookup(selectedPlatformId);
  // if error occurs, return null
  if (error) return null;
  return (
    <Menu>
      {/* rendert as a regular Button */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformId ? selectedPlatformObj?.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)} //notify the App component
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
