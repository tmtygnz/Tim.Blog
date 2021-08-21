import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Spinner, Flex, Box, Center } from '@chakra-ui/react';
import axios from 'axios';
import useFetchBlogs from '../Hooks/useFetchBlogs';

export default function Home() {

	const {blogs, isLoading} = useFetchBlogs();

	console.log(typeof (blogs));
	return (
		isLoading ? 
		<Box justifyItems="center" alignItems="center">
			<Center><Spinner size="xl"/></Center>
		</Box> :
		<div>
			<Flex justifyContent="space-evenly" flexWrap="wrap" alignItems="" p={[5]}>
				{blogs && blogs.map(p => <Card blogData={p} />)}
			</Flex>
		</div>
	);
}

