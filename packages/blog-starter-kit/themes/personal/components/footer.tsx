import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="pt-10 text-sm text-accent-1 dark:border-neutral-800 dark:text-neutral-400">
			<div className="mb-10">
				<h2 className="text-neutral-400">Thanks & contact</h2>
			</div>	
			<p className="font-light">Thanks for scrolling all the way down. You can reach me at <a href="" className="underline">jim.kollevik@gmail.com</a> or read <a href="" className="underline" target="_blank">my cv here</a>.
			Special thanks to <a href="https://rsms.me" className="underline" target="_blank">https://rsms.me</a> for the use of Inter face!</p>
		</footer>
	);
};
