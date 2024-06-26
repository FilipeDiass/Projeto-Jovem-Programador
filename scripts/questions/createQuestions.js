import { dataQuestions } from "./dataQuestions.js";

function createQuestions() {
    return `
      <div class="card-questions">
        ${dataQuestions.map(data => `
          <div class="question">
              <h2>${data.question}</h2>
              <button type="button" class="text-color">${data.option_1}</button>
              <button type="button" class="text-color">${data.option_2}</button>
              <p class="text-color">${data.votes}</p>
          </div>
          
          <div class="interactions">
              <div>
                  <div>
                      <span id="like-icon" class="material-symbols-outlined">thumb_up</span>
                      <p>${data.like}</p>
                      <span id="dislike-icon" class="material-symbols-outlined">thumb_down</span>
                      <p>${data.dislike}</p>
                  </div>

                  <div>
                      <img src="images/logotipos/comment-icon.svg" alt="comments">
                      <p>${data.comment}</p>
                  </div>
              </div>

              <div>
                  <p>Comments</p>
                  <p class="text-color">${data.comment}</p>
              </div>

              <div class="comment-box">
                  <img src="images/logotipos/profile-picture.svg" alt="profile picture">
                  <input type="text" placeholder="Add a comment...">
              </div>
          </div>
        `).join('')}
      </div>`;
}

export default createQuestions;
