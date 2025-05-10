import * as React from "react";

export const EmailTemplate = ({ name, email, phone, city, message }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src="https://www.solimoderm.com/_next/image?url=%2Fimg%2Fsolimoderm.png&w=384&q=75" 
          alt="Solimoderm Logo" 
          style={{ maxWidth: '150px', height: 'auto' }} 
        />
      </div>
      <h2 style={{ color: '#3171ba', marginBottom: '20px', textAlign: 'center' }}>Nuevo Mensaje de Contacto 🚀</h2>
      <p style={{ color: '#555', fontSize: '14px', textAlign: 'center', marginBottom: '30px' }}>
        Has recibido un nuevo mensaje desde el formulario de contacto de <strong>solimoderm.com</strong>.
      </p>
      <div style={{ marginBottom: '15px', fontSize: '14px', color: '#333' }}>
        <strong style={{ display: 'block', marginBottom: '5px' }}>Nombre:</strong>
        <span>{name}</span>
      </div>
      <div style={{ marginBottom: '15px', fontSize: '14px', color: '#333' }}>
        <strong style={{ display: 'block', marginBottom: '5px' }}>Correo Electrónico:</strong>
        <span>{email}</span>
      </div>
      <div style={{ marginBottom: '15px', fontSize: '14px', color: '#333' }}>
        <strong style={{ display: 'block', marginBottom: '5px' }}>WhatsApp:</strong>
        <span>{phone}</span>
      </div>
      <div style={{ marginBottom: '15px', fontSize: '14px', color: '#333' }}>
        <strong style={{ display: 'block', marginBottom: '5px' }}>Ciudad:</strong>
        <span>{city}</span>
      </div>
      <div style={{ marginBottom: '15px', fontSize: '14px', color: '#333' }}>
        <strong style={{ display: 'block', marginBottom: '5px' }}>Mensaje:</strong>
        <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{message}</p>
      </div>
      <div style={{ marginTop: '30px', borderTop: '1px solid #e0e0e0', paddingTop: '15px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#888' }}>
          Este mensaje fue generado automáticamente por el sistema de contacto de <strong>solimoderm.com</strong>. Por favor, no responda a este correo electrónico.
        </p>
      </div>
    </div>
  );
};

