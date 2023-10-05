import React, { useState, useEffect } from 'react';


const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simula una llamada a una API para obtener datos
    // Reemplaza esto con una llamada real a tu API
    const fetchData = async () => {
      try {
        // Aquí obtendrías los datos de la API y los almacenarías en el estado
        const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Marcas de Autos</h1>
      <ul>
        {data.map((marca, index) => (
          <li key={index}>{marca.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
