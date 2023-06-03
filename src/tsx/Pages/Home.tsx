import { sketch } from '../p5/Sketch'
import { ReactP5Wrapper } from 'react-p5-wrapper';

import techm32023 from '../../images/tech_m3spring2023.jpg';
import '../../css/index.css'; 
import Work from '../components/Work';
import { FadeIn } from '../animation/Fadein';

function Home(){
	return (
			<body className="pt-1.5">
				<div className="flex w-full justify-center items-center z-0">
					<ReactP5Wrapper sketch={sketch} ></ReactP5Wrapper>
				</div>
				<div className="bg-white shadow-[1px_0px_12px_2px_#808080] z-10 pb-32 h-auto">
					<div className="mt-7 p-4 text-center">
						<p className='m-8 font-orbitron text-3xl text-gray-800'> Latest Work </p>
					</div>
					<FadeIn>
						<Work src={techm32023} title="#3&ensp;!nside" description={<a href="https://tech-nation.org/">Tech-nation Records</a>} release="2023春M3"/>
					</FadeIn>
				</div>
			</body>
	);
}

export default Home;