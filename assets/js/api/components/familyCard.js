/**
 * @file familyCard.js
 * @description Componente de tarjeta de familia
 */

import { capitalizeFirst, formatNumber, showNotification } from '../utils/helpers.js';
import { MESSAGES } from '../utils/constants.js';

/**
 * Crear tarjeta de familia
 */
export function createFamilyCard(family, favorites, downloadsRemaining) {
    const card = document.createElement('div');
    card.className = 'family-card';
    card.dataset.id = family.id;
    card.dataset.category = family.category;
    
    const isFavorite = favorites.includes(family.id);
    
    card.innerHTML = `
        <div class="family-image">
            <img src="${family.image}" alt="${family.name}" loading="lazy">
            <div class="family-favorite ${isFavorite ? 'active' : ''}" data-family-id="${family.id}">
                <i class="fas fa-heart"></i>
            </div>
        </div>
        <div class="family-info">
            <h3 class="family-name">${family.name}</h3>
            <span class="family-category">${capitalizeFirst(family.category)}</span>
            <p class="family-downloads">
                <i class="fas fa-download"></i> ${formatNumber(family.downloads)} downloads
            </p>
            <button class="family-download-btn" data-family-id="${family.id}" ${downloadsRemaining === 0 && !family.isPremium ? 'disabled' : ''}>
                ${downloadsRemaining === 0 && !family.isPremium ? 'Upgrade to Download' : 'Download'}
            </button>
        </div>
    `;
    
    return card;
}

/**
 * Toggle favorito
 */
export function toggleFavorite(familyId, favorites) {
    const index = favorites.indexOf(familyId);
    
    if (index === -1) {
        favorites.push(familyId);
        showNotification(MESSAGES.SUCCESS.FAVORITE_ADD);
        return true;
    } else {
        favorites.splice(index, 1);
        showNotification(MESSAGES.SUCCESS.FAVORITE_REMOVE);
        return false;
    }
}

/**
 * Manejar descarga
 */
export function handleDownload(familyId, mockFamilies, downloadsRemaining) {
    const family = mockFamilies.find(f => f.id === familyId);
    
    if (!family) return { success: false, remaining: downloadsRemaining };
    
    if (downloadsRemaining === 0 && !family.isPremium) {
        showNotification(MESSAGES.ERROR.DOWNLOAD_LIMIT, 'error');
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        return { success: false, remaining: downloadsRemaining };
    }
    
    showNotification(MESSAGES.SUCCESS.DOWNLOAD);
    return { success: true, remaining: downloadsRemaining - 1 };
}