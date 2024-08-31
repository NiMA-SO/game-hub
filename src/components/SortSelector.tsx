import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import useGameQueryStore from "../store";

const SortSelector = () => {
  // const { data ,error } = useSort()
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const selectedSort = useGameQueryStore(s => s.gameQuery.sortOrder)
  const setSortOrder = useGameQueryStore(s => s.setSortOrder)

  const currentSortOrder = sortOrder.find(
    (order) => order.value === selectedSort
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaAngleDown />}>
        Order By : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((sort) => (
          <MenuItem
            key={sort.value}
            value={sort.value}
            onClick={() => setSortOrder(sort.value)}
          >
            {selectedSort === sort.value && <TiTick />}
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
