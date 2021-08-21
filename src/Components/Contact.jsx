import React, {useState} from 'react'
import { Box, Button, Flex, Input, Textarea, useToast } from '@chakra-ui/react';
import axios from 'axios';

export default function Contact() {
	const [Name, SetName] = useState('');
	const [Email, SetEmail] = useState('');
	const [Message, SetMessage] = useState('');
	const toast = useToast();

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

		const EmailData = {
			from_email: Email,
			from_name: Name,
			Message: Message
		};

		axios({
			method:"POST",
			url:"/api/SendMessage",
			data: EmailData
		}).then(res => {
			toast({
				title: "Message Sent",
				description: "The message has been sent i will respond ASAP.",
				status:"success",
				duration:9000,
				isClosable: false
			});
		}).catch(err => {
			toast({
				title: "Uh oh!",
				description: err.message,
				status:"error",
				duration:9000,
				isClosable: false
			});
		});
	}

	return (
		<div className="ContactContainer">
			<Flex m={[10]} justifyContent="center">
				<Box w="lg" h="lg"  borderRadius="md" boxShadow="lg" overflow="hidden">
					<Box p="5">
						<Input placeholder="Name" size="md" onChange={NameInputOnChange} value={Name} isRequired="true"/>
						<Input placeholder="Email" mt="3" size="md" onChange={EmailInputOnChange} value={Email} isRequired="true"/>
						<Textarea placeholder="Message" mt="3" h="xs" resize="none" onChange={MessageInputOnChange} value={Message} isRequired="true"/>
						<Button mt="3" colorScheme="teal" onClick={Send}>Send Message</Button>
					</Box>
				</Box>
			</Flex>
		</div>
	);
}
