import React, { Component } from 'react';
import {
	Box,
	Link,
	Avatar,
	HStack,
} from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi";
import '../styles/NavBar.css'


export class NavBar extends Component {
	render() {
		return (
			<div className="Nav">
				<Box boxShadow="lg" borderRadius="md"  p={[5]} m={[15]}>
					<HStack spacing="26px">
						<Avatar name="Timothy Ganoza" src="https://bit.ly/3gam1df" />
						<Link>Github</Link>
						<Link>Email</Link>
						<Link>Contact</Link>
					</HStack>
				</Box>
			</div>
		);
	}
}

export default NavBar;
