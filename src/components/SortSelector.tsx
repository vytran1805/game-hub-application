import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../gameQueryStore";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" }, //
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  // declare a constant to find the object in the array sortOrders where the value === sortOrder
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <div>
      <Menu>
        {/* rendert as a regular Button */}
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSortOrder ? currentSortOrder.label : "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((sort) => (
            <MenuItem key={sort.value} onClick={() => setSortOrder(sort.value)}>
              {sort.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelector;
