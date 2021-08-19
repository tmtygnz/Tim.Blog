import React from 'react';
import Card from './Card';
import DummyProjectData from '../Data/DummyProjectData';
import data from '../Data/DummyProjectData';
import { Flex } from '@chakra-ui/layout';
import firebase from 'firebase';
import 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import FirebaseConfig from '../Data/FirebaseConfig';

// Create a FirebaseConfig.js file in src folder and add the config from firebase in that file.
firebase.initializeApp(FirebaseConfig);

const firestore = firebase.firestore();


export default function Home() {

	const blogReference = firestore.collection("post1");
	const query = blogReference.orderBy("Date").limit(5);
	const [blogs] = useCollectionData(query, {idField: 'id'});
	console.log(blogs);

	return (
		<div>
			<Flex justifyContent="space-evenly" flexWrap="wrap" alignItems="flex-start" p={[5]}>
				{blogs && blogs.map(p => <Card blogData={p}/>)}
			</Flex>
		</div>
	);
}
