import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  setUser: () => set((state) => ({ bears: state.bears + 1 })),
  removeUser: () => set({ bears: 0 }),
  updateUser: (newBears) => set({ bears: newBears }),
}));
