function Work(props : any) {
	return (
		<div>
			<div className="flex justify-center items-center pb-4">
				<a href="https://2023daydream-skyscapes.tumblr.com/">
					<img src={props.src} className="jacket shadow-2xl" alt="jacket"/>
				</a>
			</div>
				<p className='mx-auto text-gray-800 text-lg font-titillium'> {props.title}  </p>
				<p className='mx-auto text-gray-800 font-titillium'> {props.description} {props.release} </p>
				<p className={props.sc ? 'mx-auto text-gray-600 font-titillium' : 'hidden'}> <a href={props.url}>Soundcloud</a> </p>
				<p className={props.buy ? 'mx-auto text-gray-600 font-titillium' : 'hidden'}> <a href={props.url}>Buy</a> </p>
		</div>
	);
}

export default Work;