/**
 * @file store.js
 * @description Centralized State Management System
 * 
 * Este es el "cerebro" de la aplicación. Aquí se guarda TODO
 * el estado: filtros activos, favoritos, usuario, productos, etc.
 * 
 * ¿Por qué es importante?
 * - Single source of truth (una sola fuente de verdad)
 * - Fácil de debuggear (console.log(store.getState()))
 * - Escalable (agregar SketchUp/D5/Textures es trivial)
 * - Predecible (sabes exactamente dónde está cada dato)
 * 
 * @version 1.0.0
 */

import { DOWNLOAD_LIMITS } from '../utils/constants.js';

/**
 * Store Class - Gestiona todo el estado de la aplicación
 */
class Store {
  constructor() {
    /**
     * Estado inicial de la aplicación
     */
    this.state = {
      // ========================================
      // USER STATE - Estado del usuario
      // ========================================
      user: {
        isAuthenticated: false,      // ¿Usuario logueado?
        plan: 'free',                 // 'free' | 'premium'
        downloadsRemaining: DOWNLOAD_LIMITS.free, // 3 por defecto
        email: null,                  // Email del usuario (cuando login)
        favoriteCount: 0              // Total de favoritos
      },
      
      // ========================================
      // PRODUCTS STATE - Productos activos
      // ========================================
      activeProduct: 'revit',         // 'revit' | 'sketchup' | 'd5' | 'textures'
      
      products: {
        revit: {
          enabled: true,              // Activo ahora
          name: 'Revit Families',
          totalItems: 10000,
          loaded: false               // ¿Ya se cargaron los datos?
        },
        sketchup: {
          enabled: false,             // Coming Soon Q2 2025
          name: 'SketchUp Models',
          totalItems: 0,
          loaded: false
        },
        d5: {
          enabled: false,             // Coming Soon Q2 2025
          name: 'D5 Render Assets',
          totalItems: 0,
          loaded: false
        },
        textures: {
          enabled: false,             // Coming Soon Q2 2025
          name: 'Textures',
          totalItems: 0,
          loaded: false
        }
      },
      
      // ========================================
      // FILTERS STATE - Filtros por producto
      // ========================================
      filters: {
        revit: 'all',                 // 'all' | 'furniture' | 'doors' | etc
        sketchup: 'all',
        d5: 'all',
        textures: 'all'
      },
      
      // ========================================
      // SEARCH STATE - Búsqueda
      // ========================================
      search: {
        term: '',                     // Término de búsqueda actual
        results: []                   // Resultados de búsqueda
      },
      
      // ========================================
      // FAVORITES STATE - Favoritos por producto
      // ========================================
      favorites: {
        revit: [],                    // [1, 5, 10, 25, ...]
        sketchup: [],
        d5: [],
        textures: []
      },
      
      // ========================================
      // UI STATE - Estado de la interfaz
      // ========================================
      ui: {
        modalOpen: false,             // ¿Modal de login abierto?
        sidebarOpen: false,           // Para futuro (sidebar de filtros)
        loading: false,               // ¿Cargando datos?
        notification: null            // { message: '...', type: 'success' }
      },
      
      // ========================================
      // DATA STATE - Datos cargados
      // ========================================
      data: {
        revit: [],                    // Array de familias Revit
        sketchup: [],
        d5: [],
        textures: []
      }
    };
    
    /**
     * Listeners - Funciones que se ejecutan cuando cambia el estado
     * Esto permite que los componentes "reaccionen" a cambios
     */
    this.listeners = [];
  }
  
  // ==========================================
  // GETTERS - Obtener datos del estado
  // ==========================================
  
  /**
   * Obtener todo el estado
   * @returns {Object} Estado completo
   */
  getState() {
    return this.state;
  }
  
  /**
   * Obtener producto activo
   * @returns {string} 'revit' | 'sketchup' | 'd5' | 'textures'
   */
  getActiveProduct() {
    return this.state.activeProduct;
  }
  
  /**
   * Obtener filtro del producto activo
   * @returns {string} Filtro activo (ej: 'furniture', 'all')
   */
  getCurrentFilter() {
    const product = this.state.activeProduct;
    return this.state.filters[product];
  }
  
  /**
   * Obtener favoritos del producto activo
   * @returns {Array} Array de IDs favoritos
   */
  getCurrentFavorites() {
    const product = this.state.activeProduct;
    return this.state.favorites[product];
  }
  
  /**
   * Obtener datos del producto activo
   * @returns {Array} Array de items (familias, modelos, etc)
   */
  getCurrentData() {
    const product = this.state.activeProduct;
    return this.state.data[product];
  }
  
  /**
   * Obtener descargas restantes del usuario
   * @returns {number} Número de descargas restantes
   */
  getDownloadsRemaining() {
    return this.state.user.downloadsRemaining;
  }
  
  // ==========================================
  // SETTERS - Modificar el estado
  // ==========================================
  
  /**
   * Actualizar estado (método general)
   * @param {Object} updates - Objeto con cambios a aplicar
   * 
   * Ejemplo:
   * store.setState({ activeProduct: 'sketchup' })
   */
  setState(updates) {
    // Merge profundo del estado
    this.state = this._deepMerge(this.state, updates);
    
    // Notificar a todos los listeners
    this.notify();
    
    // Log para desarrollo (puedes comentar en producción)
    console.log('📊 State updated:', updates);
  }
  
  /**
   * Cambiar producto activo
   * @param {string} product - 'revit' | 'sketchup' | 'd5' | 'textures'
   */
  setActiveProduct(product) {
    if (!this.state.products[product]) {
      console.error(`❌ Product "${product}" does not exist`);
      return;
    }
    
    if (!this.state.products[product].enabled) {
      console.warn(`⚠️ Product "${product}" is not enabled yet (Coming Soon)`);
      // Podrías mostrar un modal de "Coming Soon" aquí
      return;
    }
    
    this.setState({ activeProduct: product });
  }
  
  /**
   * Cambiar filtro del producto activo
   * @param {string} filter - Filtro a aplicar (ej: 'furniture', 'all')
   */
  setFilter(filter) {
    const product = this.state.activeProduct;
    this.setState({
      filters: {
        ...this.state.filters,
        [product]: filter
      }
    });
  }
  
  /**
   * Actualizar término de búsqueda
   * @param {string} term - Término a buscar
   */
  setSearchTerm(term) {
    this.setState({
      search: {
        ...this.state.search,
        term: term
      }
    });
  }
  
  /**
   * Toggle favorito (agregar/quitar)
   * @param {number} itemId - ID del item a toggle
   */
  toggleFavorite(itemId) {
    const product = this.state.activeProduct;
    const currentFavorites = this.state.favorites[product];
    const index = currentFavorites.indexOf(itemId);
    
    let newFavorites;
    if (index === -1) {
      // Agregar a favoritos
      newFavorites = [...currentFavorites, itemId];
    } else {
      // Quitar de favoritos
      newFavorites = currentFavorites.filter(id => id !== itemId);
    }
    
    this.setState({
      favorites: {
        ...this.state.favorites,
        [product]: newFavorites
      },
      user: {
        ...this.state.user,
        favoriteCount: this._countAllFavorites(newFavorites)
      }
    });
  }
  
  /**
   * Decrementar descargas restantes
   */
  decrementDownloads() {
    const current = this.state.user.downloadsRemaining;
    if (current > 0) {
      this.setState({
        user: {
          ...this.state.user,
          downloadsRemaining: current - 1
        }
      });
    }
  }
  
  /**
   * Cargar datos de un producto
   * @param {string} product - Producto a cargar
   * @param {Array} data - Datos a cargar
   */
  loadProductData(product, data) {
    this.setState({
      data: {
        ...this.state.data,
        [product]: data
      },
      products: {
        ...this.state.products,
        [product]: {
          ...this.state.products[product],
          loaded: true
        }
      }
    });
  }
  
  // ==========================================
  // OBSERVERS - Sistema de notificaciones
  // ==========================================
  
  /**
   * Suscribirse a cambios de estado
   * @param {Function} listener - Función a ejecutar cuando cambie el estado
   * 
   * Ejemplo:
   * store.subscribe((state) => {
   *   console.log('Estado cambió:', state);
   *   renderUI(state);
   * });
   */
  subscribe(listener) {
    this.listeners.push(listener);
    
    // Retornar función para desuscribirse
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }
  
  /**
   * Notificar a todos los listeners
   */
  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }
  
  // ==========================================
  // HELPERS PRIVADOS
  // ==========================================
  
  /**
   * Merge profundo de objetos
   * @private
   */
  _deepMerge(target, source) {
    const output = { ...target };
    
    for (const key in source) {
      if (source[key] instanceof Object && !Array.isArray(source[key])) {
        output[key] = this._deepMerge(target[key] || {}, source[key]);
      } else {
        output[key] = source[key];
      }
    }
    
    return output;
  }
  
  /**
   * Contar total de favoritos
   * @private
   */
  _countAllFavorites(newProductFavorites) {
    let total = 0;
    for (const product in this.state.favorites) {
      if (product === this.state.activeProduct) {
        total += newProductFavorites.length;
      } else {
        total += this.state.favorites[product].length;
      }
    }
    return total;
  }
  
  // ==========================================
  // RESET - Limpiar estado
  // ==========================================
  
  /**
   * Resetear estado a inicial
   * Útil para logout o limpiar datos
   */
  reset() {
    this.state.favorites = { revit: [], sketchup: [], d5: [], textures: [] };
    this.state.filters = { revit: 'all', sketchup: 'all', d5: 'all', textures: 'all' };
    this.state.search = { term: '', results: [] };
    this.state.user.downloadsRemaining = DOWNLOAD_LIMITS.free;
    this.notify();
  }
}

// ==========================================
// EXPORT - Singleton instance
// ==========================================

/**
 * Exportar instancia única del store
 * Esto garantiza que TODO el proyecto use el mismo estado
 */
export const store = new Store();

// Para debugging en consola del navegador
if (typeof window !== 'undefined') {
  window.__BORACITY_STORE__ = store;
  console.log('🏪 Store initialized. Access via: window.__BORACITY_STORE__');
}