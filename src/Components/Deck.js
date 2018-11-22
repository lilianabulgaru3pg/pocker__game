import React from "react";
import { Card } from "../Styles/Styled";

const Deck = ({ suits, values }) => (
	<>
		{suits.map(suit => (
			<div key={suit}>
				{values.map(value => (
					<Card key={suit+value} suit={suit} value={value}>
						{value}
					</Card>
				))}
			</div>
		))}
	</>
);

export default Deck;
