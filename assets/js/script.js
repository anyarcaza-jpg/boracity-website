// ============================================
// IMPORTS
// ============================================
import { MESSAGES, DOWNLOAD_LIMITS } from './utils/constants.js';
import { showNotification, smoothScrollTo } from './utils/helpers.js';
import { createFamilyCard, toggleFavorite, handleDownload } from './components/familyCard.js';

// ============================================
// MOCK DATA - Familias de ejemplo
// ============================================
const mockFamilies = [
    {
        id: 1,
        name: "Modern Executive Chair",
        category: "furniture",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Executive+Chair",
        downloads: 1543,
        isPremium: false
    },
    {
        id: 2,
        name: "Contemporary Office Desk",
        category: "furniture",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Office+Desk",
        downloads: 2103,
        isPremium: false
    },
    {
        id: 3,
        name: "Glass Entrance Door",
        category: "doors",
        image: "https://via.placeholder.com/280x220/1AB763/ffffff?text=Glass+Door",
        downloads: 987,
        isPremium: true
    },
    {
        id: 4,
        name: "Wooden Interior Door",
        category: "doors",
        image: "https://via.placeholder.com/280x220/1AB763/ffffff?text=Wood+Door",
        downloads: 1456,
        isPremium: false
    },
    {
        id: 5,
        name: "Sliding Window System",
        category: "windows",
        image: "https://via.placeholder.com/280x220/17A058/ffffff?text=Sliding+Window",
        downloads: 1289,
        isPremium: false
    },
    {
        id: 6,
        name: "Bay Window Assembly",
        category: "windows",
        image: "https://via.placeholder.com/280x220/17A058/ffffff?text=Bay+Window",
        downloads: 834,
        isPremium: true
    },
    {
        id: 7,
        name: "LED Ceiling Light",
        category: "lighting",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=LED+Light",
        downloads: 2567,
        isPremium: false
    },
    {
        id: 8,
        name: "Pendant Lamp Modern",
        category: "lighting",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Pendant+Lamp",
        downloads: 1890,
        isPremium: false
    },
    {
        id: 9,
        name: "Conference Table Large",
        category: "furniture",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Conference+Table",
        downloads: 1234,
        isPremium: true
    },
    {
        id: 10,
        name: "Lounge Sofa Set",
        category: "furniture",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Lounge+Sofa",
        downloads: 1678,
        isPremium: false
    },
    {
        id: 11,
        name: "French Door Double",
        category: "doors",
        image: "https://via.placeholder.com/280x220/1AB763/ffffff?text=French+Door",
        downloads: 945,
        isPremium: false
    },
    {
        id: 12,
        name: "Track Lighting System",
        category: "lighting",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Track+Light",
        downloads: 756,
        isPremium: true
    }
];

// ============================================
// ESTADO GLOBAL
// ============================================
let currentFilter = 'all';
let downloadsRemaining = DOWNLOAD_LIMITS.free;
let favorites = [];

// ============================================
// RENDERIZAR FAMILIAS
// ============================================
function renderFamilies(filter = 'all') {
    const grid = document.getElementById('familiesGrid');
    
    const filteredFamilies = filter === 'all' 
        ? mockFamilies 
        : mockFamilies.filter(f => f.category === filter);
    
    grid.innerHTML = '';
    
    filteredFamilies.forEach(family => {
        const card = createFamilyCard(family, favorites, downloadsRemaining);
        grid.appendChild(card);
    });
    
    attachCardEventListeners();
}

// ============================================
// ADJUNTAR EVENT LISTENERS A LAS TARJETAS
// ============================================
function attachCardEventListeners() {
    // Favoritos
    document.querySelectorAll('.family-favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const familyId = parseInt(btn.dataset.familyId);
            toggleFavorite(familyId, favorites);
            renderFamilies(currentFilter);
        });
    });
    
    // Descargas
    document.querySelectorAll('.family-download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const familyId = parseInt(btn.dataset.familyId);
            const result = handleDownload(familyId, mockFamilies, downloadsRemaining);
            
            if (result.success) {
                downloadsRemaining = result.remaining;
                updateDownloadCounter();
                renderFamilies(currentFilter);
            }
        });
    });
}

// ============================================
// ACTUALIZAR CONTADOR DE DESCARGAS
// ============================================
function updateDownloadCounter() {
    const counter = document.getElementById('downloadsLeft');
    
    if (downloadsRemaining > 0) {
        counter.innerHTML = `You have <strong>${downloadsRemaining}</strong> download${downloadsRemaining === 1 ? '' : 's'} left today`;
    } else {
        counter.innerHTML = `<strong style="color: #FF4757;">Daily limit reached!</strong> <a href="#pricing" style="color: #20CF71; font-weight: 600;">Upgrade to Premium</a>`;
    }
}

// ============================================
// SISTEMA DE FILTROS
// ============================================
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            currentFilter = filter;
            
            renderFamilies(filter);
        });
    });
}

// ============================================
// BÚSQUEDA EN TIEMPO REAL
// ============================================
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
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
    });
}

// ============================================
// MODAL DE LOGIN
// ============================================
function setupModal() {
    const modal = document.getElementById('loginModal');
    const btnLogin = document.getElementById('btnLogin');
    const btnRegister = document.getElementById('btnRegister');
    const closeModal = document.getElementById('closeModal');
    
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
    
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    document.getElementById('switchToRegister')?.addEventListener('click', (e) => {
        e.preventDefault();
        updateModalContent('register');
    });
}

function updateModalContent(type) {
    const title = document.querySelector('.modal-title');
    const subtitle = document.querySelector('.modal-subtitle');
    const footer = document.querySelector('.modal-footer');
    
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

// ============================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ============================================
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

// ============================================
// CLICK EN CATEGORÍAS
// ============================================
function setupCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            
            smoothScrollTo('#explore');
            
            setTimeout(() => {
                const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
                if (filterBtn) {
                    filterBtn.click();
                }
            }, 500);
        });
    });
}

// ============================================
// MENÚ HAMBURGUESA (MOBILE)
// ============================================
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
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Boracity website loaded!');
    
    renderFamilies();
    setupFilters();
    setupSearch();
    setupModal();
    setupSmoothScroll();
    setupCategoryCards();
    setupHamburgerMenu();
    
    setTimeout(() => {
        showNotification(MESSAGES.INFO.WELCOME);
    }, 1000);
});