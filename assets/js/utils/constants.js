/**
 * @file constants.js
 * @description Constantes globales de la aplicación
 */

// Configuración de la aplicación
export const APP_CONFIG = {
  name: 'Boracity',
  version: '1.0.0',
};

// Categorías de productos
export const CATEGORIES = {
  FURNITURE: 'furniture',
  DOORS: 'doors',
  WINDOWS: 'windows',
  LIGHTING: 'lighting',
  PLUMBING: 'plumbing',
  EQUIPMENT: 'equipment',
  STRUCTURE: 'structure',
  FINISHES: 'finishes',
};

// Metadata de categorías
export const CATEGORY_METADATA = [
  { id: 'furniture', name: 'Furniture', icon: 'fa-chair', count: 2450 },
  { id: 'doors', name: 'Doors', icon: 'fa-door-open', count: 1850 },
  { id: 'windows', name: 'Windows', icon: 'fa-window-maximize', count: 1620 },
  { id: 'lighting', name: 'Lighting', icon: 'fa-lightbulb', count: 980 },
  { id: 'plumbing', name: 'Plumbing', icon: 'fa-toilet', count: 745 },
  { id: 'equipment', name: 'Equipment', icon: 'fa-tools', count: 1230 },
  { id: 'structure', name: 'Structure', icon: 'fa-building', count: 890 },
  { id: 'finishes', name: 'Finishes', icon: 'fa-paint-roller', count: 560 },
];

// Mensajes de la app
export const MESSAGES = {
  SUCCESS: {
    DOWNLOAD: 'Downloading family... ✅',
    FAVORITE_ADD: 'Added to favorites! ❤️',
    FAVORITE_REMOVE: 'Removed from favorites',
  },
  ERROR: {
    DOWNLOAD_LIMIT: 'Daily limit reached! Upgrade to Premium for unlimited downloads.',
  },
  INFO: {
    WELCOME: 'Welcome to Boracity! 🎉',
  },
};

// Planes de usuario
export const PLAN_TYPES = {
  FREE: 'free',
  PREMIUM: 'premium',
};

// Límites de descarga por plan
export const DOWNLOAD_LIMITS = {
  free: 3,
  premium: -1, // ilimitado
};