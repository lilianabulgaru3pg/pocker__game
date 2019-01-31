import React, { Fragment } from "react";
import { Card, StyledDeck } from "../Styles/Styled";

const Deck = ({ suits, values }) => (
	<StyledDeck>
		{suits.map(suit => (
			<Fragment key={suit}>
				{values.map(value => (
					<Card key={suit+value} suit={suit} value={value}>
						{value}
					</Card>
				))}
			</Fragment>
		))}
	</StyledDeck>
);

export default Deck;
