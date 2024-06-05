import { TypeAnimation } from 'react-type-animation';

//prettier-ignore
export function TypeAnim() {
	return (
		<>
			<TypeAnimation
				sequence={["High school student", 2500, "Average Chino lover", 1500, "TeamSekai Founder", 1500, "Itzme Founder", 1500, "FullStack Developer", 1500]}
				wrapper="span"
				speed={50}
				repeat={Infinity}
			/>
		</>
	);
}
