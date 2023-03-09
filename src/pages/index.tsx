import { Button, HTag, Text } from '../components';

export default function Home(): JSX.Element {
	return (
		<div>
			<HTag tag='h1'> h1 Title</HTag>
			<Button appearance='primary' arrow='down'>
				Button
			</Button>
			<Button appearance='ghost'>Button</Button>
			<Text> TEXT </Text>
		</div>
	);
}
