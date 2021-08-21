import Card from './Card';
import { Spinner, Flex, Box, Center } from '@chakra-ui/react';
import useFetchBlogs from '../Hooks/useFetchBlogs';

export default function Home() {

	const { blogs, isLoading } = useFetchBlogs();
	return (
		<div>
			<Flex justifyContent="space-evenly" flexWrap="wrap" alignItems="" p={[5]}>
				{isLoading ? <Spinner size="xl" mt="20" thickness="0.5px" /> : blogs && blogs.map(p => <Card blogData={p} />)}
			</Flex>
		</div>
	);
}

