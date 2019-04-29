import React, { Component } from "react";

import { suits, values, max_players } from "../utils";

import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import Button from "./Button";

import { Footer } from "../Styles/Styled";

class App extends Component {
  state = {
    players: []
	};
	
  addPlayer = () => {
    const {
      players,
      players: { length }
    } = this.state;
    if (players && length < max_players)
      this.setState(prevState => ({
        players: [...prevState.players, {}]
      }));
  };

  handleRemove = idx => {
    this.setState(prevState => ({
      players: prevState.players.filter((_, i) => i !== idx)
    }));
  };

  render() {
    const { players } = this.state;

    return (
      <Layout>
        <section>
          <h1>Cards deck</h1>
          <Deck suits={suits} values={values} />
        </section>
        <section>
          <header>
            <h1>Players</h1>
          </header>
          <section>
            {players.map((_, i) => (
              <Player
                key={i}
                idx={i}
                handleRemove={this.handleRemove}
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
