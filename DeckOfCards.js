// 1. Request a single card from a newly shuffled deck

axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then(card => {console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)})
    .catch(err => {console.log(err)});

// 2. 

axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
    .then(card => {console.log(`First Card: ${card.data.cards[0].value} of ${card.data.cards[0].suit}, Second Card: ${card.data.cards[1].value} of ${card.data.cards[1].suit}`)})
    .catch(err => {console.log(err)});

// 3.


