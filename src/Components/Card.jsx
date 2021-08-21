import React from 'react';
import { Box, Image, Badge, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

export default function Card({ blogData }) {
	const { Tag, Title, Date, Content } = blogData;

	return (
		<div>
			<Box
				maxW="lg"
				borderRadius="md"
				boxShadow="lg"
				overflow="hidden"
				transition="500ms"
				_hover={{ boxShadow: "2xl"}}>

				<Image src="https://bit.ly/3gbk80e" />
				<Box p="5">

					<Box d="flex" alignItems="baseline">
						{Tag && Tag.map(tag => <Badge
							colorScheme="teal" 
							borderRadius="sm" 
							padding="1"
							textTransform="capitalize"
							mr="3">
								{tag}
							</Badge>)}
					</Box>

					<Box as="h4" fontWeight="semibold">
						{Title}
					</Box>

					<Box fontWeight="light" fontSize="sm">{Date}</Box>

					<Box>
						{Content}
					</Box>

					<Link fontSize="sm" color="teal">Continue Reading </Link>
				</Box>
			</Box>
		</div>
	);
}
