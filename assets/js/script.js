// ============================================
// IMPORTS - Sistema modular
// ============================================
import { store } from './state/store.js';
import { 
    changeFilter, 
    toggleItemFavorite, 
    downloadItem,
    updateSearch,
    loadProduct 
} from './state/actions.js';
import { mockFamilies } from './data/mockFamilies.js';
import { MESSAGES } from './utils/constants.js';
import { showNotification, smoothScrollTo } from './utils/helpers.js';
import { createFamilyCard } from './components/familyCard.js';

// ============================================
// INICIALIZACIÓN - Cargar datos iniciales
// ============================================

/**
 * Cargar datos de Revit families al store
 */
function initializeData() {
    loadProduct('revit', mockFamilies);
    console.log('✅ Data loaded into store');
}

// ============================================
// RENDERIZADO - UI Updates
// ============================================

/**
 * Renderizar familias en el grid
 */
function renderFamilies() {
    const grid = document.getElementById('familiesGrid');
    if (!grid) return;
    
    // Obtener estado actual del store
    const state = store.getState();
    const currentFilter = state.filters.revit;
    const favorites = state.favorites.revit;
    const downloadsRemaining = state.user.downloadsRemaining;
    const allFamilies = state.data.revit;
    
    // Filtrar familias
    const filteredFamilies = currentFilter === 'all' 
        ? allFamilies 
        : allFamilies.filter(f => f.category === currentFilter);
    
    // Limpiar grid
    grid.innerHTML = '';
    
    // Crear cards
    filteredFamilies.forEach(family => {
        const card = createFamilyCard(family, favorites, downloadsRemaining);
        grid.appendChild(card);
    });
    
    // Adjuntar event listeners
    attachCardEventListeners();
}

/**
 * Actualizar contador de descargas
 */
function updateDownloadCounter() {
    const counter = document.getElementById('downloadsLeft');
    if (!counter) return;
    
    const downloadsRemaining = store.getDownloadsRemaining();
    
    if (downloadsRemaining > 0) {
        counter.innerHTML = `You have <strong>${downloadsRemaining}</strong> download${downloadsRemaining === 1 ? '' : 's'} left today`;
    } else {
        counter.innerHTML = `<strong style="color: #FF4757;">Daily limit reached!</strong> <a href="#pricing" style="color: #FF4500; font-weight: 600;">Upgrade to Premium</a>`;
    }
}

// ============================================
// EVENT LISTENERS - Interacciones del usuario
// ============================================

/**
 * Adjuntar event listeners a las tarjetas
 */
function attachCardEventListeners() {
    // Favoritos
    document.querySelectorAll('.family-favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const familyId = parseInt(btn.dataset.familyId);
            toggleItemFavorite(familyId);
            renderFamilies();
        });
    });
    
    // Descargas
    document.querySelectorAll('.family-download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const familyId = parseInt(btn.dataset.familyId);
            const families = store.getCurrentData();
            
            const result = downloadItem(familyId, families);
            
            if (result.success) {
                updateDownloadCounter();
                renderFamilies();
            }
        });
    });
}

/**
 * Setup de filtros
 */
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // Agregar active al clickeado
            btn.classList.add('active');
            
            // Cambiar filtro en el store
            const filter = btn.dataset.filter;
            changeFilter(filter);
            
            // Re-renderizar
            renderFamilies();
        });
    });
}

/**
 * Setup de búsqueda en tiempo real
 */
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.family-card');
        
        cards.forEach(card => {
            const name = card.querySelector('.family-name').textContent.toLowerCase();
            
            if (name.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Actualizar término en el store (para futuro analytics)
        updateSearch(searchTerm);
    });
}

/**
 * Setup del modal de login
 */
function setupModal() {
    const modal = document.getElementById('loginModal');
    const btnLogin = document.getElementById('btnLogin');
    const btnRegister = document.getElementById('btnRegister');
    const closeModal = document.getElementById('closeModal');
    
    if (!modal) return;
    
    btnLogin?.addEventListener('click', () => {
        modal.classList.add('active');
        updateModalContent('login');
    });
    
    btnRegister?.addEventListener('click', () => {
        modal.classList.add('active');
        updateModalContent('register');
    });
    
    closeModal?.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    document.getElementById('switchToRegister')?.addEventListener('click', (e) => {
        e.preventDefault();
        updateModalContent('register');
    });
}

/**
 * Actualizar contenido del modal
 */
function updateModalContent(type) {
    const title = document.querySelector('.modal-title');
    const subtitle = document.querySelector('.modal-subtitle');
    const footer = document.querySelector('.modal-footer');
    
    if (!title || !subtitle || !footer) return;
    
    if (type === 'login') {
        title.textContent = 'Welcome Back';
        subtitle.textContent = 'Sign in to your account';
        footer.innerHTML = `Don't have an account? <a href="#" id="switchToRegister">Sign up</a>`;
    } else {
        title.textContent = 'Create Account';
        subtitle.textContent = 'Join our community today';
        footer.innerHTML = `Already have an account? <a href="#" id="switchToLogin">Sign in</a>`;
    }
    
    const switchLink = footer.querySelector('a');
    switchLink?.addEventListener('click', (e) => {
        e.preventDefault();
        updateModalContent(type === 'login' ? 'register' : 'login');
    });
}

/**
 * Setup de smooth scroll
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScrollTo(target);
            }
        });
    });
}

/**
 * Setup de categorías clickeables
 */
function setupCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            
            // Scroll a la sección de explore
            const exploreSection = document.getElementById('explore');
            if (exploreSection) {
                smoothScrollTo(exploreSection);
            }
            
            // Después de scroll, activar el filtro
            setTimeout(() => {
                const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
                if (filterBtn) {
                    filterBtn.click();
                }
            }, 500);
        });
    });
}

/**
 * Setup del menú hamburguesa (mobile)
 */
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// ============================================
// STORE SUBSCRIPTION - Reaccionar a cambios
// ============================================

/**
 * Suscribirse a cambios del store
 * Esto hace que la UI se actualice automáticamente
 */
function subscribeToStore() {
    store.subscribe((state) => {
        console.log('📊 State changed:', state);
        
        // Aquí puedes agregar lógica que reaccione a cambios específicos
        // Por ejemplo, actualizar el contador cuando cambien las descargas
        updateDownloadCounter();
    });
}

// ============================================
// INICIALIZACIÓN PRINCIPAL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Boracity website loaded!');
    console.log('🏪 Store available at: window.__BORACITY_STORE__');
    
    // 1. Cargar datos al store
    initializeData();
    
    // 2. Suscribirse a cambios del store
    subscribeToStore();
    
    // 3. Renderizar UI inicial
    renderFamilies();
    updateDownloadCounter();
    
    // 4. Setup de event listeners
    setupFilters();
    setupSearch();
    setupModal();
    setupSmoothScroll();
    setupCategoryCards();
    setupHamburgerMenu();
    
    // 5. Mostrar notificación de bienvenida
    setTimeout(() => {
        showNotification(MESSAGES.INFO.WELCOME);
    }, 1000);
    
    // 6. Log del estado inicial (útil para debugging)
    console.log('Initial state:', store.getState());
});