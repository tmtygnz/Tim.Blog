import React, {useState} from 'react'
import { Box, Button, Flex, Input, Textarea, useToast } from '@chakra-ui/react';
import EmailSender from '../util/EmailSender'
import { IoLogoGoogle } from 'react-icons/io5';

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
		EmailSender(Email, Name, Message)
			.then(response => {
				toast({
					title: "Message Sent",
					description: "The message is sent i will try to respond ASAP.",
					status: "success",
					duration: 9000,
					isClosable: true
				});
			},(error) => {
				toast({
					title: "Something went wrong",
					description: "You can message me in my email directly. " + error.message,
					status: "success",
					duration: 9000,
					isClosable: true
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
