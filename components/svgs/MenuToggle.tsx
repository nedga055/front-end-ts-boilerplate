import React from "react";

type Props = {
	label: string;
	width: number;
	height: number;
	setIsOpen: (boolean) => void;
	isOpen?: boolean;
};

const MenuToggle = ({
	label,
	width,
	height,
	setIsOpen,
	isOpen = false,
}: Props) => {
	return (
		<button
			aria-expanded={isOpen}
			aria-label={label}
			onClick={() => setIsOpen(!isOpen)}
		>
			<svg
				width={width}
				height={height}
				stroke="currentColor"
				fill="none"
				viewBox="0 0 24 24"
			>
				{!isOpen && (
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				)}
				{isOpen && (
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				)}
			</svg>
		</button>
	);
};

export default MenuToggle;
