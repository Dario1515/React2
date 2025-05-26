import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const volverInicio = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Error 404 - Página no encontrada</h1>
        <p style={styles.message}>La página que estás buscando no existe o fue movida.</p>
        <button onClick={volverInicio} style={styles.button}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '90%',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  message: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 25px',
    fontSize: '16px',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
};

// Efecto hover en CSS inline
styles.button[':hover'] = {
  backgroundColor: '#0056b3',
};

export default NotFound;

