// import _ from 'lodash';
import './style.css';

import { addScore, refreshScores } from './score.js';

const form = document.querySelector('.text-input-score');
const refresh = document.querySelector('.refresh-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(e);
  form.reset();
});

refresh.addEventListener('click', () => {
  refreshScores();
});
