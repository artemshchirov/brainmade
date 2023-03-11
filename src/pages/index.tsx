import { Button, HTag, Text } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
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

export default withLayout(Home);
