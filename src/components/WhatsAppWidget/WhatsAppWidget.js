import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppWidget.css';

function WhatsAppWidget() {
  const handleClick = () => {
    window.open('https://wa.me/6362411428', '_blank');
  };

  return (
    <div className="whatsapp-widget" onClick={handleClick}>
      <FaWhatsapp size={40} color="#ffffff" />
    </div>
  );
};

export default WhatsAppWidget;
