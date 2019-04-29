import React from "react";

import { StyledButton } from "../Styles/Styled";

const Button = ({ icon, children, onClick }) => (
	<StyledButton onClick={ onClick }>
		{ icon && (<span role="img" alt="woman raising hand" aria-label="woman raising hand">{icon}</span>)}
		{children}
	</StyledButton>
);

export default Button;
