/**
 * @file helpers.js
 * @description Funciones auxiliares reutilizables
 */

/**
 * Capitalizar primera letra
 */
export const capitalizeFirst = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Formatear números con separadores
 */
export const formatNumber = (num) => {
  if (typeof num !== 'number') return '0';
  return num.toLocaleString('en-US');
};

/**
 * Debounce - retrasa la ejecución de una función
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Mostrar notificación
 */
export const showNotification = (message, type = 'success') => {
  const colors = {
    success: '#FF4500',
    error: '#FF4757',
  };

  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${colors[type]};
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    z-index: 3000;
    font-weight: 600;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
};

/**
 * Scroll suave a un elemento
 */
export const smoothScrollTo = (target) => {
  const element = typeof target === 'string' 
    ? document.querySelector(target) 
    : target;

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};