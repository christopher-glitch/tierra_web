import "../../css/App.css";
import icon from '../../images/icon.png';
import { FadeIn } from "../animation/Fadein";

function About() {
	return (
		<body className="pt-1.5" >
			<div className="w-full h-96 bg-system bg-cover bg-center flex justify-center">
				<p className="font-orbitron text-5xl text-black my-auto backdrop-brightness-125">About</p>
			</div>
			<div className="bg-white shadow-[1px_0px_12px_2px_#808080] z-0 pb-11 h-full">
				<div className="p-10 text-center">				
					<p className='font-orbitron text-4xl text-gray-800'> tierra </p>
				</div>
				<div className="flex mx-auto justify-center container p-8">
					<FadeIn>
						<img src={icon} className="profile-icon z-10 my-auto m-14 drop-shadow-lg" alt="logo" />
					</FadeIn>
				</div>
				<div className="pt-16">
					<FadeIn>
						<p className='m-8 font-orbitron text-3xl text-gray-800'> Outline</p>
						<p className="text-lg font-titillium'"> 激しく美しい曲や不思議な曲を目指して，制作しています.</p>
					</FadeIn>
				</div>
				<div className="p-16">
					<FadeIn>
						<p className='m-8 font-orbitron text-3xl text-gray-800'> Genre</p>
						<p className="text-lg font-titillium'"> Experimental Drum'n'Bass Electronic など</p>
					</FadeIn>
				</div>
			</div>
		</body>
	);
}

export default About;