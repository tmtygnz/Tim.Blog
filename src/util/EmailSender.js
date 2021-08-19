import * as nodemailer from 'nodemailer';
import EmailAuth from '../Data/EmailSenderAuth';
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	CloseButton
} from "@chakra-ui/react"

function SendEmail(Email, Name, Message) {
	// Add a EmailSenderAuth.js in Data folder
	const EmailTranspo = nodemailer.createTransport(EmailAuth);

	const EmailToSend = {
		from: Email,
		to: EmailAuth.auth.user,
		subject: Email,
		text: Message
	};

	EmailTranspo.sendMail(EmailToSend, (err, info) => {
		if (err) {
			console.log({err});
		}
	});
	console.log("Is it finished or not");
}

export default SendEmail;