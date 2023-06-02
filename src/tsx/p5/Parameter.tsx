export let backgroundColor = '#fffffa';
export let planetCount = 6;


class PlanetProperty {

	distance: number
	radius: number
	satelliteNum: number

	constructor(distance: number, radius: number, satelliteNum: number){
		this.distance = distance;
		this.radius = radius;
		this.satelliteNum = satelliteNum;
	}
}

export var planetPropertyList = [
	new PlanetProperty(190, 8, 0),
	new PlanetProperty(250, 10, 2),
	new PlanetProperty(350, 25, 1),
	new PlanetProperty(470, 18, 2),
	new PlanetProperty(640, 35, 4),
	new PlanetProperty(790, 27, 3),
	new PlanetProperty(940, 15, 1),
	new PlanetProperty(1180, 24, 6),
];

export const satelliteDistance = 12;