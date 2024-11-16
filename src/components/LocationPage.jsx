import React from 'react';

const LocationPage = () => {
  return (
    <div className="location" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Blanco con opacidad
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0 4px 10px rgba(0, 0, 0, 51)', 
      maxWidth: '700px', 
      margin: '20px auto'
    }}>
      <h2 style={{textAlign:'center'}}>¿Dónde estamos?</h2>
      <br />
      <iframe 
        title="Mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.682058656994!2d-58.6195399!3d-34.6503346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb8900f7b561%3A0x5455b5c75c1739f8!2sBrown%20828!5e0!3m2!1sen!2sar!4v1698449498609"
        width="100%" 
        height="400"
        allowFullScreen 
      ></iframe>
    </div>
  );
};

export default LocationPage;
