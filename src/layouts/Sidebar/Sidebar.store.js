import create from "zustand";

export const useStore = create((set) => ({
    isOpenSidebar: false,
    setIsOpenSidebar: () => set((state) => ({isOpenSidebar: !state.isOpenSidebar}))
}))