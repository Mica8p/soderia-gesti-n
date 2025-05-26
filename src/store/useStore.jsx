import { create } from 'zustand';

const useStore = create((set) => ({
    user: null,
    carrito: [],
    setUser: (user) => set({ user }),
    addToCarrito: (producto) => set((state) => ({ carrito: [...state.carrito, producto] })),
    logout: () => set({ user: null, carrito: [] })
}));

export default useStore;