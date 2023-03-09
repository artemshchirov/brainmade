import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export default interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
		appearance: 'primary' | 'ghost';
		arrow?: 'right' | 'down' | 'none';
		children: ReactNode;
}
