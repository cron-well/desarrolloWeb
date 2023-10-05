import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetalleDato = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Realizamos una llamada a la API para obtener detalles de un dato específico
    const fetchData = async () => {
      try {
        const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/${id}`);
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error al obtener detalles:', error);
        setData(null); // Puedes manejar el error de manera adecuada, por ejemplo, mostrando un mensaje de error en la interfaz.
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {data ? (
        <div>
          <h2>Detalles del Vehículo</h2>
          <ul>
            <li>
              <strong>Tipo de Vehículo:</strong> {data.TipoVeiculo}
            </li>
            <li>
              <strong>Valor:</strong> {data.Valor}
            </li>
            <li>
              <strong>Marca:</strong> {data.Marca}
            </li>
            <li>
              <strong>Modelo:</strong> {data.Modelo}
            </li>
            <li>
              <strong>Año del Modelo:</strong> {data.SíModelo}
            </li>
            <li>
              <strong>Combustible:</strong> {data.Combustible}
            </li>
            <li>
              <strong>Código Fipe:</strong> {data.CódigoFipe}
            </li>
            <li>
              <strong>Mes de Referencia:</strong> {data['Mes de referencia']}
            </li>
            <li>
              <strong>Sigla de Combustible:</strong> {data.SiglaCombustivel}
            </li>
          </ul>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
};

export default DetalleDato;
