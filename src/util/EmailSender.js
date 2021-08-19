import emailjs from 'emailjs-com'
import EmailAuth from '../Data/EmailSenderAuth';
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	CloseButton
} from "@chakra-ui/react"


function SendEmail(Email, Name, Message) {
	return new Promise((resolve, reject) =>{
		const MailToSend = {
			from_email: Email,
			from_name: Name,
			Message: Message
		}
	
	
		emailjs.send(EmailAuth.ServiceID, EmailAuth.TemplateID, MailToSend, EmailAuth.UserID)
			.then((response) => {resolve("Sent Successfully")}, (error) => reject(error));
	});
}

export default SendEmail;