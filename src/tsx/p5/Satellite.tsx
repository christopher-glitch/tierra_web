import p5 from 'p5';

let frameRate = 60;

class Satellite {
	radius = 3;

	angle: number;
	distance: number;
	angularVelocity: number;

	constructor(angle: number, distance: number, angularVelocity: number) {
		this.angle = angle;
		this.distance = distance;
		if (Math.abs(angularVelocity) < Math.PI / 12) {
			this.angularVelocity = Math.PI / 6;
		} else {
			this.angularVelocity = angularVelocity;
		}
	}

	update() {
		this.angle += this.angularVelocity / frameRate;
	}

	display(p: p5, planetCenterX: number, planetCenterY: number) {
		let newX = planetCenterX + this.distance * p.cos(this.angle) / 2;
		let newY = planetCenterY + this.distance * p.sin(this.angle) / 2;

		p.fill(0);
		p.strokeWeight(2);
		p.circle(newX, newY, this.radius);
		p.noFill();
	}
}

export default Satellite;