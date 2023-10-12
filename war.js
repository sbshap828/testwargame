class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }

  createDeck() {
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        const card = new Card(suits[i], ranks[j], j + 2);
        this.cards.push(card);
      }
    }

    this.shuffle();
  }

  shuffle() {
    const cards = this.cards;

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // [cards[i], cards[j]] = [cards[j], cards[i]]
      let temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
  }
}

class GameOfWar {
  constructor() {
    this.p1 = [];
    this.p2 = [];
    this.pile = [];
    this.gameSetup();
  }

  gameSetup() {
    const gameDeck = new Deck();
    this.p1.push(...gameDeck.cards.splice(0, 26));
    this.p2.push(...gameDeck.cards);
  }

  war() {
    if (this.p1.length < 4 || this.p2.length < 4) {
      if (this.p1.length < 4) {
        this.p2.push(...this.p1.splice(0, this.p1.length), ...this.pile);

        //figure who lost
      } else {
        // (this.p2.length < 4)
        this.p1.push(...this.p2.splice(0, this.p2.length), ...this.pile);
      }
    } else {
      const p1WarCards = this.p1.splice(this.p1.length - 3, 3);
      const p2WarCards = this.p2.splice(this.p2.length - 3, 3);

      this.pile.push(...p1WarCards, ...p2WarCards);
    }
  }

  play() {
    // Remove a card from top of each player's hand
    while (this.p1.length > 0 && this.p2.length > 0){
      const p1Card = this.p1.pop();
      const p2Card = this.p2.pop();
      // compare the score of each card
      // If tied, go to war
      // If p1 wins, give p1 both cards
      // If p2 wins, give p2 both cards

      // this.pile.push(p1Card)
      // this.pile.push(p2Card)
      // console.log(this.pile[0])
      // console.log(this.pile[1])
      if (p1Card.score === p2Card.score) {
        console.log("Time for war!");
        this.pile.push(p1Card, p2Card);
        this.war();
      } else if (p1Card.score > p2Card.score) {
        console.log("Player1 Wins!)");
        this.p1.unshift(p2Card, p1Card, ...this.pile);
        this.pile.length = 0
      } else {
        console.log("Player2 Wins!)");
        this.p2.unshift(p1Card, p2Card, ...this.pile);
        this.pile.length = 0
      }
    }

    if (this.p1.length > 0) {
      console.log(`Player 1 wins with ${this.p1.length} cards`)
    } else {
      console.log(`Player 2 wins with ${this.p2.length} cards`)
    }
  }
}

const myGame = new GameOfWar();
myGame.play() 
// if ((this.p1.length) < 3) {
//   console.log('Game Over p2 wins')
// }
// if ((this.p2.length) < 3) {
//     console.log('Game Over p1 wins')
// }
// //here is the war
// need to pop 3 cards off pile from each player then do comparison
// push cards to pile

//         push.this.pile(p1Card)
//         push.this.pile(p2Card)
//         for (let i=1; i =2; i++){
//          p1Card = this.p1.pop()
//          p2Card = this.p2.pop()
//          push.this.pile(p1Card)
//          push.this.pile(p2Card)
//         }
//         //now have 6 cards- need 2 more to determine winner of pile

//       console.log("War")
//     } else if (p1Card.score > p2Card.score) {
//       console.log("Player 1 wins")
//         this.p1.unshift(p1Card)
//         this.p2.unshift(p2Card)
//     } else {
//         this.p1.unshift(p1Card)
//         this.p2.unshift(p2Card)
//       console.log("Player 2 wins")
//     }
//   }
// }

// const myGame = new GameOfWar()
// console.log(myGame)
// myGame.startGame()

// const gameDeck = new Deck();
// for (let r = 1; r <= 51; r++) {
//   console.log(gameDeck.cards[r]);
// }
//we need players
//player1 and player2
// class Players {
//   constructor(name, numcards, hand) {
//     this.name = name;
//     this.numcards = numcards;
//     this.hand = hand;
//   }
// }
// const P1 = new Players("USA");
// const P2 = new Players("USSR");

// console.log(P2);
//now give each player 1/2 of the deck
// P1.hand = gameDeck.cards.slice(0, 26);
// P2.hand = gameDeck.cards.splice(0, 26);

// console.log(P1.hand.length);
// console.log(P2.hand.length);

// for (let r = 1; r <= 26; r++) {
//  console.log(P1.hand[r])
// }
// for (let r = 1; r <= 26; r++) {
//  console.log(P2.hand[r])
// }
//  we have 26 cards in each hand
//lets start the game
// pop a card from each player

//table section
// EndOfDeckP1 = P1.hand.length - 1;
// EndOfDeckP2 = P2.hand.length;
// console.log(EndOfDeckP1);
// cardInPlayP1 = P1.hand[EndOfDeckP1];
// console.log("no?? " + cardInPlayP1);
//determine winner or tie by the value if each card
//if winner  unshift the two cards to winner
//
//
