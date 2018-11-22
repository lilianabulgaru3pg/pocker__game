import { mount } from "enzyme";

import React from "react";

import Deck from "./Deck";
import { Card } from "../Styles/Styled";

import { suits, values } from "../utils";

describe(`Card deck`, () => {
	test('renders the right amount of cards', () => {
		const deck = mount(<Deck suits={suits} values={values} />)
		expect(deck.find(Card)).toHaveLength(52);
	});
});
