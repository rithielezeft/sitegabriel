import { create } from 'zustand';
import { Client, ServiceOrder, User } from '../types';

interface Store {
  currentUser: User | null;
  clients: Client[];
  serviceOrders: ServiceOrder[];
  setCurrentUser: (user: User | null) => void;
  setClients: (clients: Client[]) => void;
  setServiceOrders: (orders: ServiceOrder[]) => void;
}

export const useStore = create<Store>((set) => ({
  currentUser: null,
  clients: [],
  serviceOrders: [],
  setCurrentUser: (user) => set({ currentUser: user }),
  setClients: (clients) => set({ clients }),
  setServiceOrders: (orders) => set({ serviceOrders: orders }),
}));