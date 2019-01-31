import styled, { css } from "styled-components";
import { getColourForSuit } from "../utils";

export const Main = styled.main`
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;

	.row {
		text-align: center
	}
`

export const Header = styled.header`
	max-width: 800px;
	padding: 20px 0;
	margin: 0 auto;
	border-bottom: 1px solid #eee;
	display: flex;
	align-items: center;

	img {
		margin-right: 20px;
	}
`

export const Card = styled.div`

	width: 30px;
	height: 55px;
	line-height: 55px;
	border-radius: 3px;
	background: #fff;
	box-shadow: 0 0 0 2px #fff;
	position: relative;
	display: inline-block;
	text-align: center;
	font-weight: 700;

	border: 2px solid;
	border-color: ${props => getColourForSuit(props.suit)};
	color: ${props => getColourForSuit(props.suit)};

	&:after,
	&:before {
		content: "${props => props.suit}";
		position: absolute;
		font-size: 12px;
		line-height: 1.2;
		font-weight: 400;
	}

	&:after {
		top: 5px;
		right: 5px;
	}

	&:before {
		bottom: 5px;
		left: 5px;
	}

	${props => props.selected
		? css`
			background: ${getColourForSuit(props.suit)}
			box-shadow: 0 0 0 2px ${getColourForSuit(props.suit)};
			color: white;
			border-color: white;
		`
		: null
	}
`

export const Footer = styled.footer`
	border-top: 1px solid #eee;
	margin-top: 20px;
	padding: 20px 0;
`;

export const StyledButton = styled.button`
	background: transparent;
	border: 1px solid #eee;
	border-radius: 5px;
	color: #eee;
	padding: .5em;

	& + & {
		margin-left: 20px;
	}
`

export const PlayerHand = styled.div`
	background: #888;
	padding: 10px;
	border-radius: 5px;
	min-height: 55px;

	${Card} {
		margin: 5px;
	}
`;

export const StyledDeck = styled.section`
	display: grid;
	grid-template-columns: repeat(13, 1fr);
	grid-template-rows: repeat(4, 1fr);
	text-align: center;

	${Card} {
		margin: 10px auto;
	}
`;
