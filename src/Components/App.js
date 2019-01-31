import React, { Component } from 'react';

import { suits, values } from "../utils";

import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import Button from "./Button";

import { Footer } from "../Styles/Styled";

class App extends Component {
	render() {
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
							<Player name="Player 1" />
							<Player name="Player 2" />
						</section>
						<Footer>
							<Button icon="🙋‍♀️">Add new player</Button>
							<Button icon="🏆">Find the winner</Button>
						</Footer>
					</section>

				</Layout>
		);
	}
}

export default App;
