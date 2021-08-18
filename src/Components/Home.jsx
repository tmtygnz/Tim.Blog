import React from 'react';
import Card from './Card';
import DummyProjectData from '../Data/DummyProjectData';
import data from '../Data/DummyProjectData';
import { Flex } from '@chakra-ui/layout';
import firebase from 'firebase';
import 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

var firebaseConfig = {
	apiKey: "AIzaSyDFTTGKu_7NTv4p_Yca1cdMDNbmDnLrnoo",
	authDomain: "blogdb-d2090.firebaseapp.com",
	projectId: "blogdb-d2090",
	storageBucket: "blogdb-d2090.appspot.com",
	messagingSenderId: "454780165663",
	appId: "1:454780165663:web:d0f339fc8d6a1ffa343f2a",
	measurementId: "G-5XKWHZLFDD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();


export default function Home() {

	const blogReference = firestore.collection("post1");
	const query = blogReference.orderBy("Date").limit(5);
	const [blogs] = useCollectionData(query, {idField: 'id'});
	console.log(blogs);

	return (
		<div>
			<Flex justifyContent="space-evenly" flexWrap="wrap" alignItems="flex-start">
				{blogs && blogs.map(p => <Card blogData={p}/>)}
			</Flex>
		</div>
	);
}
