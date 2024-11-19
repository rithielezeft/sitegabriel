export type UserRole = 'admin' | 'attendant' | 'financial';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export type VehicleType = 'car' | 'motorcycle' | 'truck';
export type ClientStatus = 'active' | 'inactive' | 'pending';

export interface Vehicle {
  id: string;
  type: VehicleType;
  make: string;
  model: string;
  year: string;
  licensePlate: string;
  color: string;
  vin?: string;
  engineNumber?: string;
  mileage?: number;
  observations?: string;
  clientId: string;
}

export interface Client {
  id: string;
  code: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: string;
  addressNumber: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  status: ClientStatus;
  vehicles: Vehicle[];
  createdAt: Date;
}

export type ServiceStatus = 'open' | 'in_progress' | 'completed' | 'canceled';

export interface ServiceItem {
  id: string;
  description: string;
  cost: number;
  estimatedTime?: string;
  completed: boolean;
}

export interface ServiceOrder {
  id: string;
  orderNumber: string;
  clientId: string;
  vehicleId: string;
  status: ServiceStatus;
  description: string;
  services: ServiceItem[];
  photos: string[];
  totalCost: number;
  estimatedCompletionDate?: Date;
  completionNotes?: string;
  technicianNotes?: string;
  createdAt: Date;
  completedAt?: Date;
  paymentStatus: 'pending' | 'partial' | 'completed';
  paymentMethod?: string;
}