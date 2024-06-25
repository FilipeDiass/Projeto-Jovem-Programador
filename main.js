import createShorts from "./scripts/shorts/createShorts.js"

// Adiciona os shorts ao html
const containerShorts = document.querySelectorAll('.containerShorts')
containerShorts.forEach((shorts, i) => shorts.insertAdjacentHTML('beforeend', createShorts(i)))