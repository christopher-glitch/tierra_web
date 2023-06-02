import { sketch } from '../p5/Sketch'
import { ReactP5Wrapper } from 'react-p5-wrapper';

function Discography() {
	return (
		<body>
			<h2> Discography </h2>
			<ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>
		</body>
	);
}

export default Discography;