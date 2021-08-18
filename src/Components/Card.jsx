import React from 'react';
import { Box, Image, Badge } from '@chakra-ui/react';

export default function Card({ blogData}) {
	const {Tag, Title, Date, Content} = blogData;
	console.log(Tag);
	return (
		<div>
			<Box maxW="lg" borderRadius="md" boxShadow="lg" overflow="hidden">
				<Image src="https://bit.ly/3gbk80e"/>
				<Box p="5">

					<Box d="flex" alignItems="baseline">
						{Tag && Tag.map(tag => <Badge colorScheme="teal" borderRadius="md" mr="3">{tag}</Badge>)}
					</Box>

					<Box as="h4" fontWeight="semibold">
						{Title}
					</Box>

					<Box fontWeight="light" fontSize="sm">{Date}</Box>

					<Box>
						{Content}
					</Box>

				</Box>
			</Box>
		</div>
	);
}
