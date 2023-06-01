export const apiServer = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const fetchScore = async (id) => {
  const response = await fetch(`${apiServer}games/${id}/scores/`);
  const data = await response.json();
  return data.result;
};

export const createScore = (name, score) => {
  const newLi = document.createElement('li');
  newLi.textContent = `${name} : ${score}`;
  return newLi;
};

export const addScore = async (id, name, score) => {
  const response = await fetch(`${apiServer}games/${id}/scores/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ user: name, score }),
  });

  const data = await response.json();
  return data.result;
};