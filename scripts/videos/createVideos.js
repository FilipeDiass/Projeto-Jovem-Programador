import { dataVideos } from "./dataVideos.js";

function createVideos(i) {
    // Seleciona o conjunto de dados baseado no índice i
    const data = dataVideos[i];

    return `
        <div class="videos-container">
            ${data.map(card => `
                <div class="video-card">
                    <img src="${card.image}" alt="video thumb" class="video-thumb">
                    <div class="card-details">
                        <img src="${card.channelProfile}" alt="channel profile" class="channel-profile">
                        
						<div class="video-info">
                            <h2 class="title">${card.title}</h2>
							
							<div>
								<p class="channel">${card.channel}</p>
								<p> . </p>
								<p class="views">${card.views}</p>
								<p> . </p>
								<p class="publication">${card.publication}</p> 
							</div>                      
						</div>
						
						<span class="material-symbols-outlined">more_vert</span>
                    </div>
                </div>
            `).join('')}
        </div>`;
}

export default createVideos;
