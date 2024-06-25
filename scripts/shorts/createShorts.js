import { dataShorts } from "./dataShorts.js"

function createShorts(i){
    const data = i === 0? dataShorts[0] : dataShorts[1]

    return `
        <div class="title">
            <picture>
                <img src="images/logotipos/logo-shorts.svg" alt="logo Shorts">
            </picture>
            <h2>Shorts</h2>
        </div>
        <div class="containerSlide">
            <div>
                ${data.map(card => {
                    return `
                    <div class="card">
                        <img src=${card.image} alt="image thumb">
                        <span class="material-symbols-outlined">more_vert</span>
                        <div>
                            <p class="title">${card.title}</p>
                            <p class="views">${card.views}</p>
                        </div>
                    </div>`
                }).join('')}
            </div>
        </div>`
}

export default createShorts
