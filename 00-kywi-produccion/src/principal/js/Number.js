// src/utils/openWhatsApp.js

/**
 * Abre un chat de WhatsApp con el número y mensaje proporcionado.
 * @param {string} phoneNumber - Número en formato internacional, sin símbolos (+).
 * @param {string} message - Mensaje predefinido que se enviará.
 */
export const openWhatsApp = (phoneNumber, message = '') => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
};