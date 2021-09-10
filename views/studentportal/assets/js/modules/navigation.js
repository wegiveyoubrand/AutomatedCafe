/* ===== CALLING NAVIGATION DATA ===== */
import { portalNavigations } from '../data/webData.js';

/* ===== CALLING HTML AND VARIABLES ===== */
const sideBar = document.querySelector(".side-container");
const portalSideNav = document.querySelector("#sideNav");
const menuControl = document.querySelector(".menu");

const liveSearchControl = document.querySelector(".liveSearchAdd");
const liveSearchDisplay = document.querySelector(".live-search-query");

const MAX_QUERY_RESULT_DISPLAY = 10;

/* ===== POPULAING DYNAMIC CARDS DISPLAY FUNCTION ===== */
function populatingCardDisplay(displayContainer, displayElementsData) {
    displayContainer.innerHTML = `
        ${displayElementsData.map((e) => {
        displayElementFormat();
    }).join('')}`
}

/* ===== DISPLAYING PORTAL SIDENAV ===== */
portalSideNav.innerHTML = `

    ${portalNavigations.map((portalNav) => {
    return `
        <li class="nav-list">
            <a href="${portalNav.link}" class="nav-link">${portalNav.name}</a>
        </li>`
}).join('')}`;

/* ===== DISPLAYING SELECTED PORTAL ITEMS ===== */
// Task 1: Save user selected portal item

// Task 2: Display Portal result according to user selection


/* ===== MODULE FUNCTIONS ===== */
function toggleDisplay(elementControl, element, className) {
    elementControl.addEventListener("click", (e) => {
        element.classList.toggle(className);
    });
}

const toggleNavDisplay = toggleDisplay(menuControl, sideBar, "active");

const toggleLiveSearchDisplay = toggleDisplay(
    liveSearchControl,
    liveSearchDisplay,
    "show"
);
