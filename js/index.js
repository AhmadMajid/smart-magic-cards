// const suit = 'hearts';
const cardsWrapper = document.querySelector('.cards-wrapper');

function createCards() {
  const cards = [];
  // Create an array with objects containing the value and the suit of each card
  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: 'spades'
    };
    cards.push(cardObject);
  }

  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: 'hearts'
    };
    cards.push(cardObject);
  }

  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: 'clubs'
    };
    cards.push(cardObject);
  }

  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: 'diamonds'
    };
    cards.push(cardObject);
  }

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
  return cards;
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code

  //Show/Hide button
  const btnWrapper =  document.querySelector('.btn-wrapper');
  const showHideButton = document.createElement('button');
  showHideButton.innerHTML = 'Show/Hide';
  showHideButton.classList.add('show','btn', 'btn-lg', 'btn-secondary');
  btnWrapper.append(showHideButton);
  showHideButton.addEventListener('click', flip);

  //Shuffle button
  const shuffle = document.createElement('button');
  shuffle.innerHTML = 'Shuffle';
  shuffle.classList.add('btn', 'btn-lg', 'btn-secondary');
  btnWrapper.append(shuffle);
  shuffle.addEventListener('click', stackShuffle);

  //Magic button
  const magic = document.createElement('magic');
  magic.innerHTML = 'Magic';
  magic.classList.add('btn', 'btn-lg', 'btn-secondary');
  btnWrapper.append(magic);
  magic.addEventListener('click', magicSpell);
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();

  //Delete Let's get started button
  const letsGetStarted =  document.getElementById('start-game');
  letsGetStarted.style.display = 'none';
}

//Function to flip between face up and face down
function flip (){
  cardsWrapper.classList.toggle('hidden');
}

//Function to shuffle cards
function stackShuffle() {
  const cards = createCards();
  let count = cards.length;
  while(count) {
    cards.push(cards.splice(Math.floor(Math.random() * count), 1)[0]);
    count -= 1;
  }

  cards.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

//Function for magic!
function magicSpell(){
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
