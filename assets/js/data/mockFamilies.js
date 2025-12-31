/**
 * @file mockFamilies.js
 * @description Mock Data - Revit Families
 * 
 * Este archivo contiene datos de prueba para desarrollo.
 * En producción, esto será reemplazado por llamadas a tu API.
 * 
 * TODO: Replace with API calls when backend is ready
 * 
 * @version 1.0.0
 */

/**
 * Mock Revit Families Data
 * @type {Array<Object>}
 */
export const mockFamilies = [
    {
        id: 1,
        name: "Modern Executive Chair",
        category: "furniture",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Executive+Chair",
        downloads: 1543,
        isPremium: false,
        fileSize: "2.5MB",
        revitVersion: "2020-2024",
        tags: ["office", "seating", "modern"]
    },
    {
        id: 2,
        name: "Contemporary Office Desk",
        category: "furniture",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Office+Desk",
        downloads: 2103,
        isPremium: false,
        fileSize: "3.1MB",
        revitVersion: "2020-2024",
        tags: ["office", "desk", "contemporary"]
    },
    {
        id: 3,
        name: "Glass Entrance Door",
        category: "doors",
        image: "https://via.placeholder.com/280x220/1AB763/ffffff?text=Glass+Door",
        downloads: 987,
        isPremium: true,
        fileSize: "1.8MB",
        revitVersion: "2020-2024",
        tags: ["entrance", "glass", "commercial"]
    },
    {
        id: 4,
        name: "Wooden Interior Door",
        category: "doors",
        image: "https://via.placeholder.com/280x220/1AB763/ffffff?text=Wood+Door",
        downloads: 1456,
        isPremium: false,
        fileSize: "1.5MB",
        revitVersion: "2020-2024",
        tags: ["interior", "wood", "residential"]
    },
    {
        id: 5,
        name: "Sliding Window System",
        category: "windows",
        image: "https://via.placeholder.com/280x220/17A058/ffffff?text=Sliding+Window",
        downloads: 1289,
        isPremium: false,
        fileSize: "2.0MB",
        revitVersion: "2020-2024",
        tags: ["sliding", "aluminum", "modern"]
    },
    {
        id: 6,
        name: "Bay Window Assembly",
        category: "windows",
        image: "https://via.placeholder.com/280x220/17A058/ffffff?text=Bay+Window",
        downloads: 834,
        isPremium: true,
        fileSize: "3.5MB",
        revitVersion: "2020-2024",
        tags: ["bay", "residential", "classic"]
    },
    {
        id: 7,
        name: "LED Ceiling Light",
        category: "lighting",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=LED+Light",
        downloads: 2567,
        isPremium: false,
        fileSize: "0.8MB",
        revitVersion: "2020-2024",
        tags: ["led", "ceiling", "energy-efficient"]
    },
    {
        id: 8,
        name: "Pendant Lamp Modern",
        category: "lighting",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Pendant+Lamp",
        downloads: 1890,
        isPremium: false,
        fileSize: "1.2MB",
        revitVersion: "2020-2024",
        tags: ["pendant", "decorative", "modern"]
    },
    {
        id: 9,
        name: "Conference Table Large",
        category: "furniture",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Conference+Table",
        downloads: 1234,
        isPremium: true,
        fileSize: "4.2MB",
        revitVersion: "2020-2024",
        tags: ["conference", "office", "large"]
    },
    {
        id: 10,
        name: "Lounge Sofa Set",
        category: "furniture",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Lounge+Sofa",
        downloads: 1678,
        isPremium: false,
        fileSize: "3.8MB",
        revitVersion: "2020-2024",
        tags: ["lounge", "sofa", "comfort"]
    },
    {
        id: 11,
        name: "French Door Double",
        category: "doors",
        image: "https://via.placeholder.com/280x220/1AB763/ffffff?text=French+Door",
        downloads: 945,
        isPremium: false,
        fileSize: "2.3MB",
        revitVersion: "2020-2024",
        tags: ["french", "double", "classic"]
    },
    {
        id: 12,
        name: "Track Lighting System",
        category: "lighting",
        image: "https://via.placeholder.com/280x220/20CF71/ffffff?text=Track+Light",
        downloads: 756,
        isPremium: true,
        fileSize: "1.5MB",
        revitVersion: "2020-2024",
        tags: ["track", "adjustable", "commercial"]
    }
];

/**
 * Función helper para obtener familia por ID
 * @param {number} id - ID de la familia
 * @returns {Object|null} Familia encontrada o null
 */
export function getFamilyById(id) {
    return mockFamilies.find(family => family.id === id) || null;
}

/**
 * Función helper para filtrar familias por categoría
 * @param {string} category - Categoría a filtrar
 * @returns {Array} Familias filtradas
 */
export function filterByCategory(category) {
    if (category === 'all') return mockFamilies;
    return mockFamilies.filter(family => family.category === category);
}