import Work from '../components/Work';

import techm32023 from '../../images/tech_m3spring2023.jpg';
import tworkz2022 from '../../images/tworkz2022.png';
import entrance2022 from '../../images/entrance2022.jpg';

function Discography() {
	return (
		<body className="pt-1.5" >
			<div className="w-full h-96 bg-system bg-cover bg-center flex justify-center">
				<p className="font-orbitron text-5xl text-black my-auto backdrop-brightness-125">Discography</p>
			</div>
			<div className="bg-white shadow-[1px_0px_12px_2px_#808080] z-0 pb-11 h-full">
				<div className="p-10 text-center">
					<p className='m-8 font-orbitron text-3xl text-gray-800'> Compilation </p>
				</div>
				<div className="lg:flex mx-auto justify-center container p-9">
					<div className='mx-auto p-5 w-72'>
						<Work className="m-4 group" 
									src={techm32023} 
									title="#3&ensp;!nside" 
									description={<a href="https://tech-nation.org/">Tech-nation Records</a>} 
									release="2023春M3"
									buy={true}
									url="https://tnationrec.booth.pm/items/4756241"/>
					</div>
					<div className='mx-auto p-5 w-72'>
						<Work className="m-4" 
									src={tworkz2022} title="#7&ensp;Bending"
									description={<a href="https://tech-nation.org/">Tech-nation Records</a>} 
									sc={true}
									url="https://soundcloud.com/user-463777725/bending"/>
					</div>
					<div className='mx-auto p-5 w-72'>
						<Work className="m-4" 
									src={entrance2022} 
									title="#1&ensp;Rubicon" 
									description={<a href="https://tech-nation.org/">Tech-nation Records</a>} 
									sc={true}
									url="https://soundcloud.com/user-463777725/rubicon"/>
					</div>
				</div>
			</div>
		</body>
	);
}

export default Discography;