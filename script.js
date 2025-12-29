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
let downloadsRemaining = 3;
let favorites = [];

// ============================================
// RENDERIZAR FAMILIAS
// ============================================
function renderFamilies(filter = 'all') {
    const grid = document.getElementById('familiesGrid');
    
    // Filtrar familias
    const filteredFamilies = filter === 'all' 
        ? mockFamilies 
        : mockFamilies.filter(f => f.category === filter);
    
    // Limpiar grid
    grid.innerHTML = '';
    
    // Crear tarjetas
    filteredFamilies.forEach(family => {
        const card = createFamilyCard(family);
        grid.appendChild(card);
    });
}

// ============================================
// CREAR TARJETA DE FAMILIA
// ============================================
function createFamilyCard(family) {
    const card = document.createElement('div');
    card.className = 'family-card';
    card.dataset.id = family.id;
    
    const isFavorite = favorites.includes(family.id);
    
    card.innerHTML = `
        <div class="family-image">
            <img src="${family.image}" alt="${family.name}">
            <div class="family-favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${family.id})">
                <i class="fas fa-heart"></i>
            </div>
        </div>
        <div class="family-info">
            <h3 class="family-name">${family.name}</h3>
            <span class="family-category">${capitalizeFirst(family.category)}</span>
            <p class="family-downloads">
                <i class="fas fa-download"></i> ${family.downloads.toLocaleString()} downloads
            </p>
            <button class="family-download-btn" onclick="downloadFamily(${family.id})" ${downloadsRemaining === 0 && !family.isPremium ? 'disabled' : ''}>
                ${downloadsRemaining === 0 && !family.isPremium ? 'Upgrade to Download' : 'Download'}
            </button>
        </div>
    `;
    
    return card;
}

// ============================================
// TOGGLE FAVORITO
// ============================================
function toggleFavorite(familyId) {
    const index = favorites.indexOf(familyId);
    
    if (index === -1) {
        favorites.push(familyId);
        showNotification('Added to favorites! ❤️');
    } else {
        favorites.splice(index, 1);
        showNotification('Removed from favorites');
    }
    
    // Re-renderizar
    renderFamilies(currentFilter);
}

// ============================================
// DESCARGAR FAMILIA
// ============================================
function downloadFamily(familyId) {
    const family = mockFamilies.find(f => f.id === familyId);
    
    if (!family) return;
    
    // Verificar límite de descargas
    if (downloadsRemaining === 0 && !family.isPremium) {
        showNotification('Daily limit reached! Upgrade to Premium for unlimited downloads.', 'error');
        // Abrir modal de pricing
        document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
        return;
    }
    
    // Simular descarga
    downloadsRemaining--;
    updateDownloadCounter();
    
    showNotification(`Downloading "${family.name}"... ✅`);
    
    // Re-renderizar para actualizar botones
    renderFamilies(currentFilter);
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
            // Remover active de todos
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // Agregar active al clickeado
            btn.classList.add('active');
            
            // Obtener filtro
            const filter = btn.dataset.filter;
            currentFilter = filter;
            
            // Renderizar
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
    
    // Abrir modal
    btnLogin.addEventListener('click', () => {
        modal.classList.add('active');
        updateModalContent('login');
    });
    
    btnRegister.addEventListener('click', () => {
        modal.classList.add('active');
        updateModalContent('register');
    });
    
    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // Cerrar al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Switch entre login y register
    document.getElementById('switchToRegister').addEventListener('click', (e) => {
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
    
    // Re-attach event listeners
    const switchLink = footer.querySelector('a');
    switchLink.addEventListener('click', (e) => {
        e.preventDefault();
        updateModalContent(type === 'login' ? 'register' : 'login');
    });
}

// ============================================
// SISTEMA DE NOTIFICACIONES
// ============================================
function showNotification(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#20CF71' : '#FF4757'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Agregar al body
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar animaciones CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
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
            
            // Scroll a la sección de familias
            document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
            
            // Activar el filtro correspondiente
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
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Cambiar icono
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
// UTILIDADES
// ============================================
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Boracity website loaded!');
    
    // Renderizar familias iniciales
    renderFamilies();
    
    // Configurar filtros
    setupFilters();
    
    // Configurar búsqueda
    setupSearch();
    
    // Configurar modal
    setupModal();
    
    // Configurar smooth scroll
    setupSmoothScroll();
    
    // Configurar tarjetas de categorías
    setupCategoryCards();
    
    // Configurar menú hamburguesa
    setupHamburgerMenu();
    
    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        showNotification('Welcome to Boracity! 🎉');
    }, 1000);
});