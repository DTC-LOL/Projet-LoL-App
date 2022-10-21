import React, { FC } from 'react';
import styled from 'styled-components';

interface PaginationProps {
	// className: string;
	totalItems: number;
	pageSize: number;
	currentPage: number;
	handlePageChange: (page: number) => void;
}

const Pagination: React.FunctionComponent<PaginationProps> = ({totalItems, pageSize, currentPage, handlePageChange}) => {
	const pageInput = React.useRef<HTMLInputElement>();
	const totalPages = Math.ceil(totalItems / pageSize);
	const [inputVal, setIntputVal] = React.useState(currentPage || 1);

	const handlePrevClick = () => {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1);
			setIntputVal(currentPage - 1);
		}
	};

	const handleNextClick = () => {
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1);
			setIntputVal(currentPage + 1);
		}
	};

	const handleInputChange = (e: any) => {
		setIntputVal(e.target.value);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		e.stopPropagation();

		let newVal = inputVal;

		// Handle too low number
		if (newVal < 1) {
			newVal = 1;
		}

		// Handle too high number
		if (newVal > totalPages) {
			newVal = totalPages;
		}

		handlePageChange(newVal);
		setIntputVal(newVal);

		// Blur input on submit
		pageInput.current!.blur();
	};

	return (
		<Form className="pagination" onSubmit={handleSubmit}>
			<Button
				className="button prev"
				onClick={handlePrevClick}
				type={"button"}
				aria-label={"Previous"}
				disabled={currentPage <= 1}
			>
				<Icon className="icon">
					<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M17 5.88L15.29 4 8 12l7.29 8L17 18.12 11.44 12z"
							fillRule="evenodd"
						/>
					</svg>
				</Icon>
			</Button>
			<Span className="text pageText">Page:</Span>
			<Input
				className="input"
				type="number"
				value={inputVal}
				onChange={handleInputChange}
				// ref={pageInput}
			/>
			<Span className="text">of {totalPages}</Span>
			<Button
				className="button next"
				onClick={handleNextClick}
				type={"button"}
				aria-label={"Next"}
				disabled={currentPage >= totalPages}
			>
				<Icon className="icon">
					<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8 5.88L9.71 4 17 12l-7.29 8L8 18.12 13.56 12z"
							fillRule="evenodd"
						/>
					</svg>
				</Icon>
			</Button>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 0;
`

const Span = styled.span`
	display: inline-block;
	margin: 0 0.5rem;
`

const Button = styled.button`
	margin: 0 0.5rem;
	display: inline-flex;
	padding: 8px;
	overflow: hidden;
	cursor: pointer;
	position: relative;
	background: transparent;
	border: none;
	font-weight: 600;
	text-decoration: none;
	&:focus {
		outline: 0;
		box-shadow: none;
	}

	&:active {
		box-shadow: none;
	}

	&:disabled {
		opacity: 0.5;
		color: transparent;
		cursor: not-allowed;
	}

	&:not(:disabled):hover {
		background: rgba(255, 255, 255, 0.08);
		color: #888888;
	}

	&.textNegative {
		color: #ff421e;

		&:hover {
			color: #ff421e;
		}
	}
`
const Icon = styled.i`
	&.icon {
		display: flex;
		flex-shrink: 0;
		width: 14px;
		height: 14px;
		fill: currentColor;
		svg {
			display: block;
			width: 100%;
			height: 100%;
		}
`
const Input = styled.input`
	width: 40px;
	max-width: 100%;
	padding: 8px;
	background-color: #dd0054;
	border: 0;
	border-radius: 5px;
	box-shadow: none;
	color: white;
	font-weight: 600;
	text-align: center;
	&::placeholder {
		color: grey;
		font-weight: 400;
		opacity: 1;
	}

	&:focus {
		outline: 0;
		box-shadow: none;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	&[type="number"] {
		appearance: textfield;
	}
	&[type="number"]::-webkit-outer-spin-button,
	&[type="number"]::-webkit-inner-spin-button {
		appearance: none;
	}
`

export default Pagination;