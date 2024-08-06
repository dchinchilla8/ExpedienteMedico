import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './Main.css'; 

const data = [
  { name: 'Módulo 1', value: 1000, funciones: [{ nombre: 'Función A1', busquedas: 100 }, { nombre: 'Función B1', busquedas: 90 }, { nombre: 'Función C1', busquedas: 80 }, { nombre: 'Función D1', busquedas: 70 }, { nombre: 'Función E1', busquedas: 60 }] },
  { name: 'Módulo 2', value: 900, funciones: [{ nombre: 'Función A2', busquedas: 90 }, { nombre: 'Función B2', busquedas: 80 }, { nombre: 'Función C2', busquedas: 70 }, { nombre: 'Función D2', busquedas: 60 }, { nombre: 'Función E2', busquedas: 50 }] },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#00FFFF', '#FFFF00'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-300 shadow-lg">
        <p>{`${payload[0].name}: ${payload[0].value} búsquedas`}</p>
      </div>
    );
  }

  return null;
};

const Dashboards = () => {
  const [selectedSystem, setSelectedSystem] = useState(null);

  const handlePieClick = (entry) => {
    setSelectedSystem(entry.name);
  };

  const selectedData = data.find(entry => entry.name === selectedSystem);

  return (
    <div className="flex p-4">
      {/* Tabla Estática */}
      <div className="w-1/3">
        <h2 className="font-nunito font-bold text-3xl mb-3">Sistemas Utilizados</h2>
        <table className="table-custom">
          <thead>
            <tr>
              <th>Sistema</th>
              <th>Elemento</th>
              <th>Búsquedas</th>
            </tr>
          </thead>
          <tbody>
            {data.flatMap(entry =>
              entry.funciones.map((funcion, idx) => (
                <tr key={idx}>
                  <td>{entry.name}</td>
                  <td>{funcion.nombre}</td>
                  <td>{funcion.busquedas}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Gráfica de Pie */}
      <div className="w-1/3 flex flex-col items-center">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx={250}
            cy={250}
            innerRadius={100}
            outerRadius={200}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            onClick={handlePieClick}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                style={{ outline: 'none' }} // Quitar el borde al hacer clic
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </div>

      {/* Tabla Dinámica */}
      <div className="w-1/3">
        {selectedSystem && (
          <div className="w-full">
            <table className="table-custom">
              <thead>
                <tr>
                  <th>Elemento</th>
                  <th>Búsquedas</th>
                </tr>
              </thead>
              <tbody>
                {selectedData ? (
                  selectedData.funciones.length > 0 ? (
                    selectedData.funciones.map((funcion, idx) => (
                      <tr key={idx}>
                        <td>{funcion.nombre}</td>
                        <td>{funcion.busquedas}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>No hay elementos</td>
                      <td>0</td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td>Cargando...</td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboards;
