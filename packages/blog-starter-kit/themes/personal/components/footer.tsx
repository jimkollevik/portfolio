import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="text-neutral-500">
			<div className="grid grid-cols-2 gap-4">
				<div className="">
					<ul>
        				<li>jim.kollevik@gmail.com</li>
        				<li><a href="#">Linkedin</a></li>
        				<li><a href="#">Resume</a></li>
        				<li>Trying to be 1% everyday</li>
      				</ul>
      			</div>
      		</div>
		</footer>
	);
};
