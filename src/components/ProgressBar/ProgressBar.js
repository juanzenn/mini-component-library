/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
	small: {
		height: "8px",
		borderRadius: "4px",
		padding: "0",
	},
	medium: {
		height: "12px",
		borderRadius: "4px",
		padding: "0",
	},
	large: {
		height: "24px",
		borderRadius: "8px",
		padding: "8",
	},
};

const ProgressBar = ({ value, size }) => {
	return (
		<span
			role="progressbar"
			aria-valuenow={value}
			aria-valuemin={0}
			aria-valuemax={100}
		>
			<Progress
				progress={value > 100 ? 100 : !value ? 0 : value}
				{...SIZES[size]}
			/>
			<VisuallyHidden aria-label="progressbar-value">{value}</VisuallyHidden>
		</span>
	);
};

const Progress = styled.figure`
	--padding: ${(p) => p.padding + "px"};
	--percentage: ${(p) => 370 * (p.progress / 100) + "px"};

	position: relative;
	width: 370px;
	height: ${(p) => p.height};
	border-radius: ${(p) => p.borderRadius};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	overflow: hidden;

	&::before {
		position: absolute;
		top: calc(var(--padding) / 2);
		left: calc(var(--padding) / 2);
		content: "";
		width: calc(var(--percentage) - var(--padding));
		height: calc(100% - var(--padding));
		background-color: ${COLORS.primary};
		border-radius: ${(p) => p.borderRadius};
		border-end-end-radius: ${(p) => (p.progress < 100 ? 0 : p.borderRadius)};
		border-start-end-radius: ${(p) => (p.progress < 100 ? 0 : p.borderRadius)};
	}
`;

export default ProgressBar;
