import { TypeAnimation } from 'react-type-animation';

//prettier-ignore
export function TypeAnim() {
	return (
		<>
			<TypeAnimation
				sequence={["High school student in Japan", 1500, "TeamSekai Founder", 1500, "Itzme Founder(Release soon lol)", 1500, "FullStack Developer", 2500]}
				wrapper="span"
				speed={50}
				repeat={Infinity}
			/>
		</>
	);
}
