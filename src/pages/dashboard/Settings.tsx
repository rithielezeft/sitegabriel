import React, { useState } from 'react';
import { Shield, Users, Bell, Palette, Database } from 'lucide-react';

export function Settings() {
  const [activeTab, setActiveTab] = useState('permissions');

  const tabs = [
    { id: 'permissions', label: 'Permissões', icon: Shield },
    { id: 'users', label: 'Usuários', icon: Users },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'appearance', label: 'Aparência', icon: Palette },
    { id: 'system', label: 'Sistema', icon: Database },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Configurações</h1>
      
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 px-4" aria-label="Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-yellow-500 text-yellow-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } flex items-center px-3 py-4 border-b-2 text-sm font-medium`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'permissions' && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Grupos de Usuários</h3>
                <div className="space-y-4">
                  {['Admin', 'Gerente', 'Atendente', 'Técnico'].map((role) => (
                    <div key={role} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div>
                        <h4 className="font-medium text-gray-900">{role}</h4>
                        <p className="text-sm text-gray-500">Permissões padrão para {role.toLowerCase()}s</p>
                      </div>
                      <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                        Editar Permissões
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Permissões do Sistema</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Gerenciar Usuários',
                    'Gerenciar Clientes',
                    'Gerenciar Veículos',
                    'Gerenciar Ordens de Serviço',
                    'Acessar Relatórios',
                    'Configurações do Sistema',
                  ].map((permission) => (
                    <div key={permission} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      <input
                        type="checkbox"
                        id={permission}
                        className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                      />
                      <label htmlFor={permission} className="text-sm font-medium text-gray-700">
                        {permission}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg">
                Adicionar Usuário
              </button>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Usuários do Sistema</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Admin', email: 'admin@renovacar.com', role: 'Admin' },
                    { name: 'João Silva', email: 'joao@renovacar.com', role: 'Gerente' },
                    { name: 'Maria Santos', email: 'maria@renovacar.com', role: 'Atendente' },
                  ].map((user) => (
                    <div key={user.email} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div>
                        <h4 className="font-medium text-gray-900">{user.name}</h4>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <span className="text-xs text-gray-400">{user.role}</span>
                      </div>
                      <div className="space-x-2">
                        <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                          Editar
                        </button>
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                          Remover
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Add more tab contents as needed */}
        </div>
      </div>
    </div>
  );
}