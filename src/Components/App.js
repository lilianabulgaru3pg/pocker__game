import React, { Component } from "react";
import update from "immutability-helper"; //https://reactjs.org/docs/update.html
import pocker from "poker-hands";
import { suits, values, max_players } from "../utils";

import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import Button from "./Button";

import { Footer } from "../Styles/Styled";

class App extends Component {
  state = {
    players: [],
    cardsDeck: []
  };

  playersCards = [];

  componentDidMount() {
    this.newGame();
  }

  newGame = () => {
    let cardsDeck = [];
    values.forEach(value =>
      suits.forEach(suit => cardsDeck.push(value + suit))
    );
    this.setState({ cardsDeck: this.randomDeck(cardsDeck) });
  };

  randomDeck(cardsDeck) {
    for (let i = cardsDeck.length - 1; i > 0; i--) {
      let idx = Math.floor(Math.random() * i);
      let temp = cardsDeck[i];
      cardsDeck[i] = cardsDeck[idx];
      cardsDeck[idx] = temp;
    }
    return cardsDeck;
  }

  addPlayer = () => {
    const {
      players,
      players: { length },
      cardsDeck
    } = this.state;
    if (players && length < max_players) {
      this.playersCards.push(cardsDeck.slice(0, 5));
      this.setState({
        players: update(players, {
          $push: [{ name: `Player ${length + 1} ` }]
        }),
        cardsDeck: update(cardsDeck, { $splice: [[0, 5]] })
      });
    }
  };

  savePlayersName = (newName, idx) => {
    const { players } = this.state;
    this.setState({
      players: update(players, { [idx]: { $set: { name: newName } } })
    });
  };

  findWinner = () => {
    const hands = this.playersCards.map(playerCards => playerCards.join(" "));
    const { length } = this.playersCards;
    let winner = 0;
    for (let i = 1; i < length; i++) {
      if (pocker.judgeWinner([hands[winner], hands[i]]) !== 0) winner = i;
    }
    alert(`Winner is ${this.state.players[winner].name} !`);
  };

  handleRemove = idx => {
    const { players, cardsDeck } = this.state;
    this.setState({
      players: update(players, { $splice: [[idx, 1]] }),
      cardsDeck: update(cardsDeck, {
        $splice: [
          [cardsDeck.length, 0, ...this.playersCards.splice(idx, 1).flat()]
        ]
      })
    });
  };

  render() {
    const { players, cardsDeck } = this.state;
    return (
      <Layout>
        <section>
          <h1>Cards deck</h1>
          <Deck suits={suits} values={values} remainCards={cardsDeck} />
        </section>
        <section>
          <header>
            <h1>Players</h1>
          </header>
          <section>
            {players.map(({ name }, i) => (
              <Player
                key={i}
                idx={i}
                handleRemove={this.handleRemove}
                name={name}
                savePlayersName={this.savePlayersName}
                cards={this.playersCards[i]}
              />
            ))}
          </section>
          <Footer>
            <Button icon="🙋‍♀️" onClick={this.addPlayer}>
              Add new player
            </Button>
            <Button icon="🏆" onClick={this.findWinner}>
              Find the winner
            </Button>
          </Footer>
        </section>
      </Layout>
    );
  }
}

export default App;
