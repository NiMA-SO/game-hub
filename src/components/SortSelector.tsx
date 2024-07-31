import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

interface Props {
  onSelectSort: (sort: string) => void;
  selectedSort: string;
}
const SortSelector = ({ onSelectSort, selectedSort }: Props) => {
  // const { data ,error } = useSort()
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

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
            onClick={() => onSelectSort(sort.value)}
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
