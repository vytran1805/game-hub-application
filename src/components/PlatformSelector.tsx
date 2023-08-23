import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatformLookup from "../hooks/usePlatformLookup";
interface Props {
  // this onSelectedPlatform function takes a Platform obj and returns void
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  // usePlatform() to get data dynamically and handle error
  const { data: platforms, error } = usePlatforms();
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
            onClick={() => onSelectPlatform(platform)} //notify the App component
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
