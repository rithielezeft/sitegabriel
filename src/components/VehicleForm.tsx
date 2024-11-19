import React from 'react';
import { Vehicle, VehicleType } from '../types';

interface VehicleFormProps {
  onSubmit: (data: Partial<Vehicle>) => void;
  vehicle?: Vehicle;
  clientId: string;
}

export function VehicleForm({ onSubmit, vehicle, clientId }: VehicleFormProps) {
  const vehicleTypes: { value: VehicleType; label: string }[] = [
    { value: 'car', label: 'Carro' },
    { value: 'motorcycle', label: 'Moto' },
    { value: 'truck', label: 'Caminhão' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const vehicleData: Partial<Vehicle> = {
      type: formData.get('type') as VehicleType,
      make: formData.get('make') as string,
      model: formData.get('model') as string,
      year: formData.get('year') as string,
      licensePlate: formData.get('licensePlate') as string,
      color: formData.get('color') as string,
      vin: formData.get('vin') as string,
      engineNumber: formData.get('engineNumber') as string,
      mileage: Number(formData.get('mileage')),
      observations: formData.get('observations') as string,
      clientId,
    };

    onSubmit(vehicleData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo</label>
          <select
            name="type"
            defaultValue={vehicle?.type}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          >
            {vehicleTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Marca</label>
          <input
            type="text"
            name="make"
            defaultValue={vehicle?.make}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Modelo</label>
          <input
            type="text"
            name="model"
            defaultValue={vehicle?.model}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ano</label>
          <input
            type="text"
            name="year"
            defaultValue={vehicle?.year}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Placa</label>
          <input
            type="text"
            name="licensePlate"
            defaultValue={vehicle?.licensePlate}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cor</label>
          <input
            type="text"
            name="color"
            defaultValue={vehicle?.color}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Chassi (VIN)</label>
          <input
            type="text"
            name="vin"
            defaultValue={vehicle?.vin}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Número do Motor</label>
          <input
            type="text"
            name="engineNumber"
            defaultValue={vehicle?.engineNumber}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Quilometragem</label>
          <input
            type="number"
            name="mileage"
            defaultValue={vehicle?.mileage}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Observações</label>
        <textarea
          name="observations"
          defaultValue={vehicle?.observations}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="submit"
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-md"
        >
          {vehicle ? 'Atualizar Veículo' : 'Adicionar Veículo'}
        </button>
      </div>
    </form>
  );
}