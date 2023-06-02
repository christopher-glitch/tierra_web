import p5 from 'p5';
import Satellite from './Satellite';

let frameRate = 60;

class Planet {
	radius: number;
	angle: number;
	distance: number;
	angularVelocity: number;
	fill: boolean;
	color: number;
	satellite: Satellite[] = [];
	ran: number;

	x: number;
	y: number;


	constructor(radius: number, angle: number,
		distance: number, angularVelocity: number,
		fill: boolean, color: number, p: p5) {
		this.radius = radius;
		this.angle = angle;
		this.distance = distance;

		if(Math.abs(angularVelocity) < Math.PI/24) {
			this.angularVelocity = Math.PI/24;
		}else{
			this.angularVelocity = angularVelocity;
		}
		this.fill = fill;
		this.color = color;

		this.x = this.distance * p.cos(this.angle) / 2;
		this.y = this.distance * p.sin(this.angle) / 2;
		this.ran = p.random(0.9, 1.5);
	}

	addSatellite(satellite: Satellite[]) {
		this.satellite = satellite
	}

	update(p: p5) {
		this.angle += this.angularVelocity / frameRate;
		this.x = this.distance * p.cos(this.angle) / 2;
		this.y = this.distance * p.sin(this.angle) / 2;
	}

	display(p: p5) {
		if (this.fill) {
			p.fill(this.color);
		}
		else {
			p.noFill();
		}
		p.stroke(0);
		p.strokeWeight(2);
		p.ellipse(this.x, this.y, this.radius, this.radius);
		p.noFill();
		p.strokeWeight(1);
		p.stroke(this.color);
		p.arc(0, 0, this.distance, this.distance, this.angle - this.ran * p.PI / 5, this.angle + this.ran* p.PI / 5);
		p.arc(0, 0, this.distance, this.distance, this.angle + p.PI - this.ran * p.PI / 5, this.angle + p.PI + this.ran * p.PI / 5);
	}
}

export default Planet