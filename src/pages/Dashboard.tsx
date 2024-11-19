import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { BarChart, Users, Car, ClipboardList } from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();
  const currentUser = useStore((state) => state.currentUser);

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  const stats = [
    { title: 'Clientes Ativos', value: '150+', icon: Users },
    { title: 'Serviços em Andamento', value: '25', icon: ClipboardList },
    { title: 'Veículos na Oficina', value: '18', icon: Car },
    { title: 'Faturamento Mensal', value: 'R$ 85.000', icon: BarChart },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-yellow-600">Renova Car</h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">{currentUser.name}</span>
              <button
                onClick={() => {
                  useStore.getState().setCurrentUser(null);
                  navigate('/login');
                }}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Icon className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            {stat.title}
                          </dt>
                          <dd className="text-lg font-semibold text-gray-900">
                            {stat.value}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}