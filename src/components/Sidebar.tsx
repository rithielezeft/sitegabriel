import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Users, 
  Car, 
  ClipboardList, 
  BarChart, 
  Settings, 
  Phone,
  Search,
  PlusCircle,
  Home
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Clientes', path: '/dashboard/clients' },
  { icon: Car, label: 'Veículos', path: '/dashboard/vehicles' },
  { icon: ClipboardList, label: 'Ordens de Serviço', path: '/dashboard/service-orders' },
  { icon: Phone, label: 'Atendimentos', path: '/dashboard/support' },
  { icon: BarChart, label: 'Relatórios', path: '/dashboard/reports' },
  { icon: Settings, label: 'Configurações', path: '/dashboard/settings' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-900 min-h-screen fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-yellow-500">Renova Car</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-yellow-500 transition-colors ${
                isActive ? 'bg-gray-800 text-yellow-500' : ''
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}