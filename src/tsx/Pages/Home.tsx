import { sketch } from '../p5/Sketch'
import { ReactP5Wrapper } from 'react-p5-wrapper';

import techm32023 from '../../images/tech_m3spring2023.jpg';
import '../../css/index.css'; 

function Home(){
	return (
		<body className="pt-1.5">
			<div className="flex justify-center items-center z-0">
				<ReactP5Wrapper sketch={sketch} ></ReactP5Wrapper>
			</div>
			<div className="bg-white shadow-[1px_0px_12px_2px_#808080] z-10 pb-11">
				<div className="mt-7 p-4 text-center">
					<p className='m-8 font-orbitron text-3xl text-gray-800'> Latest Work </p>
				</div>
				<div className="flex justify-center items-center pb-4">
					<a href="https://2023daydream-skyscapes.tumblr.com/">
						<img src={techm32023} className="jacket shadow-2xl" alt="logo"/>
					</a>
				</div>
				<p className='mx-auto text-gray-800 text-lg font-titillium'> #3&ensp;!nside  </p>
				<p className='mx-auto text-gray-800 text-lg font-titillium'><a href="https://tech-nation.org/">Tech-nation Records </a>2023春M3 </p>
			</div>
		</body>
	);
}

export default Home;