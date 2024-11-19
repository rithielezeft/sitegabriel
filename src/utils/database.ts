import { Client, Vehicle, ServiceOrder } from '../types';

// Simulated database using localStorage
const DB_KEYS = {
  CLIENTS: 'renovacar_clients',
  VEHICLES: 'renovacar_vehicles',
  SERVICE_ORDERS: 'renovacar_orders',
};

// Generic CRUD operations
const createItem = <T>(key: string, item: T): T => {
  const items = getItems<T>(key);
  items.push(item);
  localStorage.setItem(key, JSON.stringify(items));
  return item;
};

const getItems = <T>(key: string): T[] => {
  const items = localStorage.getItem(key);
  return items ? JSON.parse(items) : [];
};

const updateItem = <T extends { id: string }>(key: string, id: string, updates: Partial<T>): T | null => {
  const items = getItems<T>(key);
  const index = items.findIndex(item => item.id === id);
  if (index === -1) return null;
  
  items[index] = { ...items[index], ...updates };
  localStorage.setItem(key, JSON.stringify(items));
  return items[index];
};

const deleteItem = <T extends { id: string }>(key: string, id: string): boolean => {
  const items = getItems<T>(key);
  const filtered = items.filter(item => item.id !== id);
  localStorage.setItem(key, JSON.stringify(filtered));
  return items.length !== filtered.length;
};

// Specific database operations
export const db = {
  clients: {
    create: (client: Client) => createItem(DB_KEYS.CLIENTS, client),
    getAll: () => getItems<Client>(DB_KEYS.CLIENTS),
    update: (id: string, updates: Partial<Client>) => updateItem(DB_KEYS.CLIENTS, id, updates),
    delete: (id: string) => deleteItem<Client>(DB_KEYS.CLIENTS, id),
    export: () => {
      const clients = getItems<Client>(DB_KEYS.CLIENTS);
      const blob = new Blob([JSON.stringify(clients, null, 2)], { type: 'application/json' });
      return URL.createObjectURL(blob);
    }
  },
  vehicles: {
    create: (vehicle: Vehicle) => createItem(DB_KEYS.VEHICLES, vehicle),
    getAll: () => getItems<Vehicle>(DB_KEYS.VEHICLES),
    getByClient: (clientId: string) => getItems<Vehicle>(DB_KEYS.VEHICLES).filter(v => v.clientId === clientId),
    update: (id: string, updates: Partial<Vehicle>) => updateItem(DB_KEYS.VEHICLES, id, updates),
    delete: (id: string) => deleteItem<Vehicle>(DB_KEYS.VEHICLES, id),
    export: () => {
      const vehicles = getItems<Vehicle>(DB_KEYS.VEHICLES);
      const blob = new Blob([JSON.stringify(vehicles, null, 2)], { type: 'application/json' });
      return URL.createObjectURL(blob);
    }
  },
  serviceOrders: {
    create: (order: ServiceOrder) => createItem(DB_KEYS.SERVICE_ORDERS, order),
    getAll: () => getItems<ServiceOrder>(DB_KEYS.SERVICE_ORDERS),
    update: (id: string, updates: Partial<ServiceOrder>) => updateItem(DB_KEYS.SERVICE_ORDERS, id, updates),
    delete: (id: string) => deleteItem<ServiceOrder>(DB_KEYS.SERVICE_ORDERS, id),
    export: () => {
      const orders = getItems<ServiceOrder>(DB_KEYS.SERVICE_ORDERS);
      const blob = new Blob([JSON.stringify(orders, null, 2)], { type: 'application/json' });
      return URL.createObjectURL(blob);
    }
  }
};