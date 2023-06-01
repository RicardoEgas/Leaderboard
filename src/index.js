import './index.css';
import {
  apiServer, createScore, fetchScore, addScore,
} from './modules/api.js';

let id = '';
const refreshBtn = document.querySelector('.refresh-btn');
const addBtn = document.querySelector('.add-btn');

const startGame = async () => {
  const response = await fetch(`${apiServer}games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ name: 'Leaderboard' }),
  });
  const data = await response.json();
  id = data.result;
};

startGame();

refreshBtn.addEventListener('click', async () => {
  const scoreList = document.querySelector('.scores-list');
  const scores = await fetchScore(id);
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
  await addScore(id, name, score);
  form.reset();
});