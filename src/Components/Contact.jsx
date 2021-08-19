import React, {useState} from 'react'
import { Box, Button, Flex, Input, Textarea } from '@chakra-ui/react';
import EmailSender from '../util/EmailSender'
import { IoLogoGoogle } from 'react-icons/io5';

export default function Contact() {
	const [Name, SetName] = useState('');
	const [Email, SetEmail] = useState('');
	const [Message, SetMessage] = useState('');

	const NameInputOnChange = (Event) => {
		SetName(Event.target.value);
		console.log(Name);
	}

	const EmailInputOnChange = (Event) => {
		SetEmail(Event.target.value);
	}

	const MessageInputOnChange = (Event) => {
		SetMessage(Event.target.value);
	}

	const Send = (Event) => {
		EmailSender(Email, Name, Message);
	}

	return (
		<div className="ContactContainer">
			<Flex m={[10]} justifyContent="center">
				<Box w="lg" h="lg"  borderRadius="md" boxShadow="lg" overflow="hidden">
					<Box p="5">
						<Input placeholder="Name" size="md" onChange={NameInputOnChange} value={Name}/>
						<Input placeholder="Email" mt="3" size="md" onChange={EmailInputOnChange} value={Email}/>
						<Textarea placeholder="Message" mt="3" h="xs" resize="none" onChange={MessageInputOnChange} value={Message}/>
						<Button mt="3" colorScheme="teal" onClick={Send}>Send Message</Button>
					</Box>
				</Box>
			</Flex>
		</div>
	);
}
