import React from 'react';

const FAQ = () => {
  return (
    <div className="faq" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Blanco con opacidad
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0 4px 10px rgba(0, 0, 0, 51)', 
      maxWidth: '800px', 
      margin: '20px auto'
    }}>
      <h2 style={{textAlign:'center'}}>Preguntas Frecuentes</h2>
      <ul>
        <li><strong>¿Qué métodos de pago aceptan?</strong>: Transferencia, Efectivo, Tarjetas de Débito y Crédito (Consultar % de interés)</li>
        <li><strong>¿Cuánto tiempo de garantía tienen los productos?</strong>: 30 días.</li>
        <li><strong>¿Puedo señar una gráfica y retirarla luego?</strong>: Si, de hecho, es lo ideal, así nos solemos manejar, ya qué algunas gráficas se encuentran en depósito por la seguridad de las placas, sólo tenemos las cajas vacías en nuestro local.</li>
        <li><strong>¿Las placas son usadas?</strong>: Sí, todas están testeadas.</li>
        <li><strong>¿Las placas fueron abiertas?</strong>: No, todas nuestras placas conservan su sello de seguridad. Si alguna placa fue abierta para realizarle mantenimiento de pasta térmica, el cliente será notificado</li>
        <li><strong>¿¡Fueron usadas para minería!?</strong>: No. Nuestras placas siempre fueron usadas para gaming, fueron compradas a particulares, o tomadas como permutas.</li>
      </ul>
    </div>
  );
};

export default FAQ;

