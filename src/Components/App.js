import React, { Component } from 'react';

import { suits, values } from "../utils";

import Layout from "./Layout";
import Deck from "./Deck";
import { Card, PlayerHand, Button, Footer } from "../Styles/Styled";

class App extends Component {
	state = {
		selectedCards: []
	}
	render() {
		return (
				<Layout>

					<section>
						<h1>
						Cards deck
						</h1>
						<Deck suits={suits} values={values}
							addCard={(suit, value) => {
								this.setState({selectedCards: [...this.state.selectedCards, {suit, value}]});
							}}
						/>
					</section>
					<section>
						<header>
							<h1>Players</h1>
						</header>
						<section>
							<article>
								<p>
									Player 1 name
									<Button>
										<span role="img" alt="pencil" aria-label="pencil">✏️</span>
										Edit
									</Button>
									<Button>
										<span role="img" alt="flame" aria-label="flame">🔥</span>
										Remove
									</Button>
								</p>
								<PlayerHand>
										{this.state.selectedCards.slice(0, 5).map(card => {
											return (
												<Card suit={card.suit} value={card.value} selected={false}>
													{card.value}
												</Card>
											)
										} )}
								</PlayerHand>
							</article>
							<article>
								<p>
									Player 2 name
									<Button>
										<span role="img" alt="pencil" aria-label="pencil">✏️</span>
										Edit
									</Button>
									<Button>
										<span role="img" alt="flame" aria-label="flame">🔥</span>
										Remove
									</Button>
								</p>
								<PlayerHand>
										<Card suit="S" value="A">
											A
										</Card>
										<Card suit="S" value="K">
											K
										</Card>
										<Card suit="S" value="Q" selected={true}>
											Q
										</Card>
										<Card suit="S" value="J">
											J
										</Card>
										<Card suit="S" value="T">
											T
										</Card>
								</PlayerHand>
							</article>
						</section>
						<Footer>
								<Button>
									<span role="img" alt="woman raising hand" aria-label="woman raising hand">🙋‍♀️</span>
									Add new player
								</Button>
								<Button>
									<span role="img" alt="trophy" aria-label="trophy">🏆</span>
									Find the winner
								</Button>
						</Footer>
					</section>

				</Layout>
		);
	}
}

export default App;
