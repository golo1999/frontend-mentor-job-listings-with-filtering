import { useMemo } from "react";

import { FilteredItem } from "components";
import { useFilteringStore } from "store";

import { Clear, Container } from "./FilteringCard.style";

export function FilteringCard() {
  const { filteredItems, clearFilteredItems, setIsFilteringCardVisible } =
    useFilteringStore();

  function handleClearClick() {
    clearFilteredItems();
    setIsFilteringCardVisible(false);
  }

  const items = useMemo(
    () =>
      filteredItems.map((item, index) => (
        <FilteredItem item={item} key={index} />
      )),
    [filteredItems]
  );

  return (
    <Container.Main>
      <Container.FilteredItems>{items}</Container.FilteredItems>
      <Clear onClick={handleClearClick}>Clear</Clear>
    </Container.Main>
  );
}
