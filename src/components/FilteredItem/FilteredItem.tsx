import Remove from "images/icon-remove.svg";
import { useFilteringStore } from "store";

import { Container, Name, RemoveIcon } from "./FilteredItem.style";

interface Props {
  item: string;
}

export function FilteredItem({ item }: Props) {
  const {
    filteredItems,
    clearFilteredItems,
    removeFilteredItem,
    setIsFilteringCardVisible,
  } = useFilteringStore();

  function handleRemoveClick() {
    if (filteredItems.length === 1) {
      clearFilteredItems();
      setIsFilteringCardVisible(false);
    } else {
      removeFilteredItem(item);
    }
  }

  return (
    <Container.Main>
      <Name>
        <b>{item}</b>
      </Name>
      <Container.RemoveIcon onClick={handleRemoveClick}>
        <RemoveIcon alt="remove" src={Remove} />
      </Container.RemoveIcon>
    </Container.Main>
  );
}
