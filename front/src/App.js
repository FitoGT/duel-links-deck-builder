import React from 'react';
import Container from 'react-bootstrap/Container'
import Search from './components/Search'
import axios from 'axios'

let getCard = (card) => {
  axios({
    'method': 'GET',
    'url': `http://localhost:4000/card/${card}`,
    'headers': {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'example.com',
      'x-rapidapi-key': process.env.RAPIDAPI_KEY
    },
    'params': {
      'search': 'parameter',
    },
  })
    .then((response) => {
      if (response.data.error) {
        alert('card not found')
      } else {
        console.log(response.data.data[0])
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
function App() {
  return (
    <Container>
      <Search getCard={getCard} />
    </Container>
  );
}

export default App;
