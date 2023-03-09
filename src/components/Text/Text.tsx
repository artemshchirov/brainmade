import cn from 'classnames';
import styles from './Text.module.css';
import TextProps from './TextProps.props';

export function Text({
	size = 'md',
	children,
	className,
	...props
}: TextProps): JSX.Element {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.sm]: size === 'sm',
				[styles.md]: size === 'md',
				[styles.lg]: size === 'lg',
				[styles.xl]: size === 'xl',
			})}
			{...props}
		>
			{children}
		</p>
	);
}
