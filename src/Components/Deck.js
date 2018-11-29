import React, {Component} from "react";
import { Card } from "../Styles/Styled";

class Deck extends Component {
	state = {
		selected: {suit: null, value: null}
	}
	render() {
		return <>
		{this.props.suits.map(suit => (
			<div key={suit}>
				{this.props.values.map(value => (
					<Card key={suit+value} suit={suit} value={value} selected={suit === this.state.selected.suit && value === this.state.selected.value}
						onClick={() =>{
							this.props.addCard(suit, value);
							this.setState({selected: {suit, value}});
						}}
						>
						{value}
					</Card>
				))}
			</div>
		))}</>
	}
}

export default Deck;
