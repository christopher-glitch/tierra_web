import { useInView } from 'react-intersection-observer';

type Props = {
	children: React.ReactNode
}

export const FadeIn = ( {children} : Props ) => {
	const { ref, inView } = useInView({
		rootMargin: '-50px', 
		triggerOnce: true, 
	});

	return (
		<div
			ref={ref}
			className={`${inView ? "opacity-100" : "opacity-0 translate-y-[20%]"} duration-[1s]`}
		>
			{children}
		</div>
	)
}