import createShorts from "./scripts/shorts/createShorts.js"
import createQuestions from "./scripts/questions/createQuestions.js"
import createVideos from "./scripts/videos/createVideos.js"

// Adiciona os shorts ao html
const containerShorts = document.querySelectorAll('.containerShorts')
containerShorts.forEach((shorts, i) => shorts.insertAdjacentHTML('beforeend', createShorts(i)))

// Adiciona as questions ao html
const containerQuestions = document.querySelectorAll('.containerQuestions')
containerQuestions.forEach((question, i) => question.insertAdjacentHTML('beforeend', createQuestions(i)))

// Adiciona os vídeos ao html
const containerVideos = document.querySelectorAll('.containerVideos')
containerVideos.forEach((videos, i) => videos.insertAdjacentHTML('beforeend', createVideos(i)))

