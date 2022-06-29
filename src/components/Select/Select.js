import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<Label>{label}</Label>
			<SelectedOption>
				<SelectedOptionValue>{displayedValue}</SelectedOptionValue>
				<ChevronDown id="chevron-down" size={24} strokeWidth={2} />
			</SelectedOption>

			<Combobox value={value} onChange={onChange}>
				{children}
			</Combobox>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: fit-content;
`;

const Label = styled.label`
	display: inline-block;
	font-size: 0.875rem;
	margin-bottom: 4px;
`;

const SelectedOptionValue = styled.span`
	vertical-align: middle;
	margin-right: 24px;
`;

const ChevronDown = styled(Icon)`
	display: inline-block;
	vertical-align: middle;
`;

const Combobox = styled.select`
	cursor: pointer;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	height: 100%;
	width: 100%;
`;

const SelectedOption = styled.div`
	width: fit-content;
	background-color: ${COLORS.transparentGray15};
	padding: 12px 16px;
	border-radius: 8px;
	color: ${COLORS.gray700};

	${Wrapper}:hover & {
		color: ${COLORS.black};
	}
`;

export default Select;
