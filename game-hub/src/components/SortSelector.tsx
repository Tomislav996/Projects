
import { Menu, MenuButton,MenuItem, MenuList, Button } from '@chakra-ui/react';
import {  BsChevronDown } from 'react-icons/bs';

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortBy: string
}



const SortSelector = ({onSelectSortOrder, sortBy}: Props) => {

    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
      ];

    const currentSortOrder = sortOrders.find((order) => order.value = sortBy)

    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by: {currentSortOrder?.label || 'Relevance'}
          </MenuButton>
          <MenuList>
            {sortOrders.map((order) => (
              <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                {order.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
}

export default SortSelector