import { externalservices } from '../data/webData.js';

function populatingCardDisplay(displayContainer, displayElementsData) {
    displayContainer.innerHTML = `
        ${displayElementsData.map((e) => {
        displayElementFormat();
    }).join('')}`
}
