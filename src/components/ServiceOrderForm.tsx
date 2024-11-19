import React, { useState } from 'react';
import { ServiceOrder, Client, Vehicle, ServiceItem } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface ServiceOrderFormProps {
  onSubmit: (data: Partial<ServiceOrder>) => void;
  clients: Client[];
  vehicles: Vehicle[];
  serviceOrder?: ServiceOrder;
}

export function ServiceOrderForm({ onSubmit, clients, vehicles, serviceOrder }: ServiceOrderFormProps) {
  const [selectedClient, setSelectedClient] = useState(serviceOrder?.clientId || '');
  const [services, setServices] = useState<Partial<ServiceItem>[]>(
    serviceOrder?.services || [{ id: '1', description: '', cost: 0, completed: false }]
  );

  const clientVehicles = vehicles.filter((v) => v.clientId === selectedClient);

  const handleAddService = () => {
    setServices([...services, { id: Date.now().toString(), description: '', cost: 0, completed: false }]);
  };

  const handleRemoveService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const handleServiceChange = (index: number, field: keyof ServiceItem, value: string | number | boolean) => {
    const updatedServices = [...services];
    updatedServices[index] = { ...updatedServices[index], [field]: value };
    setServices(updatedServices);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const totalCost = services.reduce((sum, service) => sum + (service.cost || 0), 0);

    const orderData: Partial<ServiceOrder> = {
      clientId: formData.get('clientId') as string,
      vehicleId: formData.get('vehicleId') as string,
      description: formData.get('description') as string,
      status: 'open',
      services: services as ServiceItem[],
      totalCost,
      createdAt: new Date(),
      paymentStatus: 'pending',
    };

    onSubmit(orderData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Cliente</label>
          <select
            name="clientId"
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          >
            <option value="">Selecione um cliente</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Veículo</label>
          <select
            name="vehicleId"
            defaultValue={serviceOrder?.vehicleId}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          >
            <option value="">Selecione um veículo</option>
            {clientVehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.make} {vehicle.model} - {vehicle.licensePlate}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Descrição do Problema</label>
        <textarea
          name="description"
          defaultValue={serviceOrder?.description}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Serviços</h3>
          <button
            type="button"
            onClick={handleAddService}
            className="flex items-center text-yellow-600 hover:text-yellow-700"
          >
            <Plus className="h-5 w-5 mr-1" />
            Adicionar Serviço
          </button>
        </div>

        {services.map((service, index) => (
          <div key={service.id} className="flex gap-4 items-start">
            <div className="flex-1">
              <input
                type="text"
                value={service.description}
                onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                placeholder="Descrição do serviço"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              />
            </div>
            <div className="w-32">
              <input
                type="number"
                value={service.cost}
                onChange={(e) => handleServiceChange(index, 'cost', Number(e.target.value))}
                placeholder="Valor"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              />
            </div>
            <button
              type="button"
              onClick={() => handleRemoveService(index)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="submit"
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-md"
        >
          {serviceOrder ? 'Atualizar Ordem de Serviço' : 'Criar Ordem de Serviço'}
        </button>
      </div>
    </form>
  );
}