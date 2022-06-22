// import _ from 'lodash';
import './style.css';

fetch(
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7rmDPOHHJfcKgrMrYAGZ/scores/',
  {
    method: 'POST',
    body: JSON.stringify({
      name: 'My cool new game',
      user: 'John Doe',
      score: 100,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  },
)
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7rmDPOHHJfcKgrMrYAGZ/scores/')
  .then(response => response.json())
  .then(json => console.log(json.result));
