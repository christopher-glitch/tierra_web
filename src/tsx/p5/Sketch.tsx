import p5 from 'p5';
import Planet from './Planet';
import fixedStar from './FixedStar';
import Satellite from './Satellite';
import { planetPropertyList, backgroundColor, satelliteDistance } from './Parameter';


var planetList: Planet[] = [];

export const sketch = (p: p5) => {

	let centerX: number;
	let centerY: number;


	p.setup = () => {
		p.rectMode('radius'); 
		p.createCanvas(p.windowWidth, 580);
		p.background(backgroundColor);

		centerX = p.width/2;
		centerY = p.height/2;

		initialPlanet();
	};

	function initialPlanet(){
		for (let i = 0; i < planetPropertyList.length; i++) {
			planetList.push(new Planet(
				planetPropertyList[i].radius,
				p.random() * 2 * p.PI,
				planetPropertyList[i].distance,
				p.random(-2, 2) * p.PI / 4,
				p.random(0, 1) < 0.5,
				p.random(40, 180),
				p
			));
		}

		initialSatellite();
	}

	function initialSatellite(){
		for (let i = 0; i < planetPropertyList.length; i++) {
			var satellite: Satellite[] = [] ;
			let j = planetPropertyList[i].satelliteNum;

			while(j > 0){
				satellite.push(new Satellite(
					p.random() * 2 * p.PI,
					satelliteDistance * j + planetList[i].radius,
					p.random(-2, 2) * p.PI / 2,
				))
				j--;
			}
			planetList[i].addSatellite(satellite);
		}
	}

	p.draw = () => {
		p.background(backgroundColor);
		p.translate(centerX, centerY);
		for (let i = 0; i < planetPropertyList.length; i++) {
			let planet = planetList[i];
			planet.update(p);
			planet.display(p);

			for (let j = 0; j < planet.satellite.length; j++){
				planet.satellite[j].update();
				planet.satellite[j].display(p, planet.x, planet.y);
			}
		}
		fixedStar(p);
	};

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, 580);
		centerX = p.width / 2;
		centerY = p.height / 2;
		p.translate(centerX, centerY);
	};
};
