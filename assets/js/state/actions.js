/**
 * @file actions.js
 * @description Store Actions - Acciones comunes del estado
 * 
 * Este archivo contiene funciones de "alto nivel" que realizan
 * operaciones comunes sobre el store. Son como "atajos" para
 * modificar el estado de manera consistente.
 * 
 * ¿Por qué separar esto del store?
 * - Código más limpio y organizado
 * - Fácil de testear
 * - Reutilizable desde cualquier parte de la app
 * 
 * @version 1.0.0
 */

import { store } from './store.js';
import { showNotification } from '../utils/helpers.js';
import { MESSAGES } from '../utils/constants.js';

// ==========================================
// FILTER ACTIONS - Acciones de filtros
// ==========================================

/**
 * Cambiar filtro y re-renderizar
 * @param {string} filter - Filtro a aplicar
 */
export function changeFilter(filter) {
  store.setFilter(filter);
  
  // Log para desarrollo
  console.log(`🔍 Filter changed to: ${filter}`);
}

// ==========================================
// FAVORITE ACTIONS - Acciones de favoritos
// ==========================================

/**
 * Toggle favorito y mostrar notificación
 * @param {number} itemId - ID del item
 */
export function toggleItemFavorite(itemId) {
  const favorites = store.getCurrentFavorites();
  const isCurrentlyFavorite = favorites.includes(itemId);
  
  // Toggle en el store
  store.toggleFavorite(itemId);
  
  // Mostrar notificación
  if (isCurrentlyFavorite) {
    showNotification(MESSAGES.SUCCESS.FAVORITE_REMOVE);
  } else {
    showNotification(MESSAGES.SUCCESS.FAVORITE_ADD);
  }
}

// ==========================================
// DOWNLOAD ACTIONS - Acciones de descarga
// ==========================================

/**
 * Procesar descarga de item
 * @param {number} itemId - ID del item a descargar
 * @param {Array} items - Array de items disponibles
 * @returns {Object} { success: boolean, message: string }
 */
export function downloadItem(itemId, items) {
  const item = items.find(i => i.id === itemId);
  
  if (!item) {
    return { success: false, message: 'Item not found' };
  }
  
  const state = store.getState();
  const downloadsRemaining = state.user.downloadsRemaining;
  const userPlan = state.user.plan;
  
  // Check si puede descargar
  if (downloadsRemaining === 0 && userPlan !== 'premium') {
    showNotification(MESSAGES.ERROR.DOWNLOAD_LIMIT, 'error');
    
    // Scroll a pricing
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    return { success: false, message: 'Download limit reached' };
  }
  
  // Procesar descarga
  showNotification(MESSAGES.SUCCESS.DOWNLOAD);
  
  // Decrementar solo si no es premium
  if (userPlan !== 'premium') {
    store.decrementDownloads();
  }
  
  // Aquí irá la lógica real de descarga cuando conectes la API
  console.log(`📥 Downloading item ${itemId}:`, item.name);
  
  return { success: true, message: 'Download started' };
}

// ==========================================
// SEARCH ACTIONS - Acciones de búsqueda
// ==========================================

/**
 * Actualizar búsqueda
 * @param {string} term - Término de búsqueda
 */
export function updateSearch(term) {
  store.setSearchTerm(term);
  console.log(`🔎 Search term: ${term}`);
}

/**
 * Filtrar items por término de búsqueda
 * @param {Array} items - Items a filtrar
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Array} Items filtrados
 */
export function filterBySearch(items, searchTerm) {
  if (!searchTerm || searchTerm.trim() === '') {
    return items;
  }
  
  const term = searchTerm.toLowerCase();
  return items.filter(item => 
    item.name.toLowerCase().includes(term)
  );
}

// ==========================================
// PRODUCT ACTIONS - Acciones de productos
// ==========================================

/**
 * Cambiar producto activo
 * @param {string} product - 'revit' | 'sketchup' | 'd5' | 'textures'
 */
export function switchProduct(product) {
  const state = store.getState();
  
  // Verificar si está habilitado
  if (!state.products[product].enabled) {
    showNotification(
      `${state.products[product].name} coming soon! Join the waitlist.`,
      'info'
    );
    return false;
  }
  
  // Cambiar producto
  store.setActiveProduct(product);
  console.log(`🔄 Switched to product: ${product}`);
  
  return true;
}

/**
 * Cargar datos de producto
 * @param {string} product - Producto a cargar
 * @param {Array} data - Datos a cargar
 */
export function loadProduct(product, data) {
  store.loadProductData(product, data);
  console.log(`✅ Loaded ${data.length} items for ${product}`);
}

// ==========================================
// USER ACTIONS - Acciones de usuario
// ==========================================

/**
 * Login de usuario (futuro)
 * @param {Object} userData - Datos del usuario
 */
export function loginUser(userData) {
  store.setState({
    user: {
      ...store.getState().user,
      isAuthenticated: true,
      email: userData.email,
      plan: userData.plan || 'free',
      downloadsRemaining: userData.plan === 'premium' ? -1 : 3
    }
  });
  
  showNotification('Welcome back! 🎉');
  console.log('👤 User logged in:', userData.email);
}

/**
 * Logout de usuario (futuro)
 */
export function logoutUser() {
  store.reset();
  
  store.setState({
    user: {
      isAuthenticated: false,
      plan: 'free',
      downloadsRemaining: 3,
      email: null,
      favoriteCount: 0
    }
  });
  
  showNotification('Logged out successfully');
  console.log('👋 User logged out');
}

/**
 * Actualizar plan de usuario
 * @param {string} plan - 'free' | 'premium'
 */
export function updateUserPlan(plan) {
  const downloadsRemaining = plan === 'premium' ? -1 : 3;
  
  store.setState({
    user: {
      ...store.getState().user,
      plan: plan,
      downloadsRemaining: downloadsRemaining
    }
  });
  
  showNotification(
    plan === 'premium' 
      ? '🎉 Welcome to Premium! Unlimited downloads.' 
      : 'Switched to Free plan'
  );
}

// ==========================================
// UI ACTIONS - Acciones de interfaz
// ==========================================

/**
 * Abrir/cerrar modal
 * @param {boolean} isOpen - Estado del modal
 */
export function setModalOpen(isOpen) {
  store.setState({
    ui: {
      ...store.getState().ui,
      modalOpen: isOpen
    }
  });
}

/**
 * Mostrar loading
 * @param {boolean} isLoading - Estado de loading
 */
export function setLoading(isLoading) {
  store.setState({
    ui: {
      ...store.getState().ui,
      loading: isLoading
    }
  });
}

// ==========================================
// ANALYTICS HELPERS - Para futuro
// ==========================================

/**
 * Track evento (preparado para Google Analytics)
 * @param {string} action - Acción realizada
 * @param {Object} params - Parámetros adicionales
 */
export function trackEvent(action, params = {}) {
  console.log(`📊 Event tracked: ${action}`, params);
  
  // Aquí conectarás Google Analytics
  // if (window.gtag) {
  //   window.gtag('event', action, params);
  // }
}