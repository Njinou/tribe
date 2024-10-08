import {create} from 'zustand';
import { persist } from 'zustand/middleware';

// Counter store with persistent state
const useCounterStore = create(
  persist(
    (set) => ({
      count: 0,  // Initial state
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),  // Reset count to 0
    }),
    {
      name: 'counter-storage',  // Name in localStorage/AsyncStorage
      getStorage: () => localStorage,  // Use AsyncStorage for React Native
    }
  )
);

export default useCounterStore;
