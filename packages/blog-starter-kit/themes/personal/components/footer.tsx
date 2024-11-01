import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t pt-10 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
			<ul>
        <li>jim.kollevik@gmail.com</li>
        <li><a href="#">Linkedin</a></li>
        <li><a href="#">Resume</a></li>
        <li>Trying to be 1% everyday</li>
      </ul>
		</footer>
	);
};
