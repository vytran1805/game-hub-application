import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <div>
      <Menu>
        {/* rendert as a regular Button */}
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: Relevance
        </MenuButton>
        <MenuList>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Date Added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release dat</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Avarage rank</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelector;
