import React from "react";
import { Main, Header } from "../Styles/Styled";


const Layout = ({ children }) => (
	<>
		<Header>
			<img src="/logo.svg" alt="Grabyo logo" width="50" style={{ verticalAlign: "middle" }} />
			<h1>
				Grabyo Poker
			</h1>
		</Header>
		<Main role="main">
			{children}
		</Main>
	</>
);

export default Layout;
