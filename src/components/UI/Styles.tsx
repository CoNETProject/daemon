import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	h1, h2, h3, h4, h5, h6 {
		font-family: 'Roboto Bold', sans-serif;
	}

	p, a, div, span {
		font-family: 'Roboto Regular', sans-serif;
	}

	button {
		cursor: pointer;
	}

	.tippy-box[data-theme~='custom'] {
		background-color: ${localStorage.getItem('mui-mode') === 'light' ? "#FFFFFF" : "#1b1b1d"};
		color: ${(props) => props.theme.ui.colors.text.primary};
		border: 1px solid ${(props) => props.theme.ui.colors.border.light};
		border-radius: 5px;
		box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.2);
		overflow: hidden;
	}

	.tippy-content {
		padding: 0;
	}
`;
