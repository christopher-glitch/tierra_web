import { ImSoundcloud, ImTwitter} from "react-icons/im";

import '../../css/index.css';


function Footer() {

	return (
		<footer className="w-screen bg-white h-auto">
			<div className="container flex mx-auto p-16 justify-center space-x-10 my-auto">
				<a href="https://soundcloud.com/user-463777725"><ImSoundcloud color="gray" size={40} /></a>
				<a href="https://twitter.com/tierra39167881"><ImTwitter color="gray" size={40} /></a>		
			</div>
		</footer>
	);
}

export default Footer;