import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface TextProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
		size?: 'sm' | 'md' | 'lg' | 'xl';
		children: ReactNode;
}
