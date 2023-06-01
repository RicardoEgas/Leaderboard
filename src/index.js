import './index.css';
import {
  createScore, fetchScore, addScore,
} from './modules/api.js';

const refreshBtn = document.querySelector('.refresh-btn');
const addBtn = document.querySelector('.add-btn');

refreshBtn.addEventListener('click', async () => {
  const scoreList = document.querySelector('.scores-list');
  const scores = await fetchScore();
  scoreList.innerHTML = '';
  scores.forEach((n) => {
    scoreList.appendChild(createScore(n.user, n.score));
  });
});

addBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  await addScore(name, score);
  form.reset();
});