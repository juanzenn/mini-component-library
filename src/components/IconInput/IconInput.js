import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
	small: {
		fontSize: "14",
		iconSize: "16",
		iconMargin: "8",
		padding: "4",
		borderSize: "1",
	},
	large: {
		fontSize: "18",
		iconSize: "24",
		iconMargin: "12",
		padding: "8",
		borderSize: "2",
	},
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
	const inputSize = SIZES[size];

	return (
		<Wrapper {...inputSize} width={width}>
			<label htmlFor={label}>
				<IconWrapper
					id={icon}
					size={inputSize.iconSize}
					strokeWidth={2}
					{...inputSize}
				/>
				<VisuallyHidden>{label}</VisuallyHidden>
			</label>

			<Input {...inputSize} placeholder={placeholder} id={label} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-bottom: ${(p) => p.padding + "px"};
	width: ${(p) => p.width + "px"};
	border-bottom: ${(p) => p.borderSize + `px  solid ${COLORS.black}`};
	color: ${COLORS.gray700};

	&:hover {
		color: ${COLORS.black};
	}

	&:focus-within {
		outline: auto;
		outline-offset: 4px;
	}
`;

const IconWrapper = styled(Icon)`
	display: inline-block;
	vertical-align: middle;
	margin-right: ${(p) => p.iconMargin + "px"};
	color: inherit;
`;

const Input = styled.input`
	display: inline-block;
	vertical-align: middle;
	border: none;
	outline: none;
	font-size: ${(p) => p.fontSize + "px"};
	width: calc(90% - ${(p) => p.iconSize + "px"});
	font-weight: 700;
	color: inherit;

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}

	&:focus ${Wrapper} {
		background-color: aqua;
	}
`;

export default IconInput;
