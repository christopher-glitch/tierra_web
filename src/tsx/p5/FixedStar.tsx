import p5 from 'p5';

let angle1 = 0;
let angle2 = 0;
let angle3 = 0;

let frameRate = 60;

function fixedStar(p: p5) {
	let radius = 60;

	p.stroke(0);
	p.noFill();
	p.strokeWeight(3);
	p.ellipse(0, 0, radius - 10);

	p.strokeWeight(2);

	angle1 += p.PI/6/frameRate;
	angle2 -= p.PI / 6 / frameRate;
	angle3 += p.PI / 3 / frameRate;

	
	p.push();
	p.stroke(45);
	p.rotate(angle1);
	p.triangle(radius * p.sqrt(3) / 2, radius / 2,
		-radius * p.sqrt(3) / 2, radius / 2,
		0, -radius * p.sqrt(3) / 2);
	p.pop();

	p.push();
	p.stroke(15);
	p.rotate(angle2);
	p.triangle(-radius * p.sqrt(3) / 2, - radius / 2,
		radius * p.sqrt(3) / 2, - radius / 2,
		0, radius * p.sqrt(3) / 2);
	p.pop();

	p.push();
	p.stroke(125);
	p.rotate(angle3);
	p.rect(0, 0,
		radius / 2 + 7, radius / 2 + 7);
	p.pop();
}

export default fixedStar;