import { create } from "zustand";

export const useLodgeStore = create((set) => ({
  User: null,
  setUser: () => set((state) => ({ bears: state.bears + 1 })),
  removeUser: () => set({ bears: 0 }),
  updateUser: (newBears) => set({ bears: newBears }),
}));
