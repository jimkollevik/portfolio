import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="text-neutral-500 text-sm">
			<div className="grid grid-cols-2 gap-4">
				<div className="">
					<ul className="underline flex">
        				<li>jim.kollevik@gmail.com</li>
        				<li><a href="#">Linkedin</a></li>
        				<li><a href="#">Resume</a></li>
      				</ul>
      			</div>
      			<div className="text-right">
      				<ul>
        				<li className="text-[#757575]">Trying to be 1% everyday</li>
      				</ul>
      			</div>
      		</div>
		</footer>
	);
};
