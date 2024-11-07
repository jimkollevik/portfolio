import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t pt-10 text-base text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
			<p>Thanks for scrolling all the way down. You can reach me at <a href="">jim.kollevik@gmail.com</a> or read <a href="">my cv here</a>.
			Special thanks to <a href="https://rsms.me">https://rsms.me</a> for the use of Inter face!</p>
		</footer>
	);
};
