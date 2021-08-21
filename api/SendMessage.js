import axios from 'axios';
require("dotenv").config();



module.exports = async (req, res) => {

	const EmailAuth = JSON.parse(process.env.EmailAuth);

	const EmailConfig = {
		service_id: EmailAuth.ServiceID,
		template_id: EmailAuth.TemplateID,
		user_id: EmailAuth.UserID,
		accessToken: EmailAuth.AccessToken,
		template_params: req.body
	};

	res.send(await SendEmail(EmailConfig));
}

async function SendEmail(EmailConfig) {
	let resp = await axios({
		method: "POST",
		url: "https://api.emailjs.com/api/v1.0/email/send",
		data: EmailConfig
	});

	return resp.status;
}
