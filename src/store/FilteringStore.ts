import { create } from "zustand";

type Store = {
  filteredItems: string[];
  isFilteringCardVisible: boolean;
  addFilteredItem: (item: string) => void;
  clearFilteredItems: () => void;
  removeFilteredItem: (item: string) => void;
  setIsFilteringCardVisible: (value: boolean) => void;
};

export const useFilteringStore = create<Store>((set) => ({
  filteredItems: [],
  isFilteringCardVisible: false,
  addFilteredItem(item) {
    const { filteredItems } = useFilteringStore.getState();
    const isAlreadyAdded = filteredItems.includes(item);

    if (!isAlreadyAdded) {
      set((state) => ({
        ...state,
        filteredItems: [...state.filteredItems, item],
      }));
    }
  },
  clearFilteredItems() {
    set((state) => ({ ...state, filteredItems: [] }));
  },
  removeFilteredItem(item) {
    const { filteredItems } = useFilteringStore.getState();
    const isAlreadyAdded = filteredItems.includes(item);

    if (isAlreadyAdded) {
      set((state) => ({
        ...state,
        filteredItems: state.filteredItems.filter(
          (filteredItem) => filteredItem !== item
        ),
      }));
    }
  },
  setIsFilteringCardVisible(value) {
    set((state) => ({ ...state, isFilteringCardVisible: value }));
  },
}));
